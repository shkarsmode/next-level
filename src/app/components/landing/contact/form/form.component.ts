import { Component, OnDestroy, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    ValidationErrors,
    Validators,
} from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
    Subject,
    Subscription,
    ThrottleConfig,
    asyncScheduler,
    tap,
    throttleTime,
} from 'rxjs';
import { ThankYouComponent } from 'src/app/shared/dialogs/thank-you/thank-you.component';
import { IGeoLocation } from 'src/app/shared/interfaces/IAutocomplete';
import { ISubmitForm } from 'src/app/shared/interfaces/ISubmitForm';
import { AutocompleteService } from '../../../../shared/services/autocomplete.service';
import { UserService } from '../../../../shared/services/user.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnDestroy {

    public form: FormGroup;
    public isLoading: boolean = false;
    public isSubmitted: boolean = false;
    public autocompleteLocations: IGeoLocation[] = [];

    private dialogConfig: MatDialogConfig = new MatDialogConfig();
    private formData: ISubmitForm;
    private autocompleteInputChanged$: Subject<Event> = new Subject<Event>();
    private throttleConfig: ThrottleConfig = { leading: false, trailing: true };
    private subscriptions: Subscription[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private dialog: MatDialog,
        private userService: UserService,
        private snackBar: MatSnackBar,
        private autocompleteService: AutocompleteService
    ) {}

    public ngOnInit(): void {
        this.getIsSubmittedAndFormData();
        this.initForm();
        this.initDialogConfig();
    }

    private getIsSubmittedAndFormData(): void {
        this.isSubmitted = !!localStorage.getItem('isFormSubmitted');
        
        if (this.isSubmitted) {
            this.formData = JSON.parse(localStorage.getItem('fromData')!);
            const formSubmittedTimeStr = localStorage.getItem('formSubmittedTime') as string;
            const formSubmittedTime = parseInt(formSubmittedTimeStr, 10);

            if (!formSubmittedTime) {
                this.recordCurrentDateInMs();
                return;
            }

            const currentTime = new Date().getTime();
            const thirtyMinutes = 30 * 60 * 1000;

            if (currentTime - formSubmittedTime >= thirtyMinutes) {
                localStorage.removeItem('formSubmittedTime');
                localStorage.removeItem('isFormSubmitted');
                this.isSubmitted = false;
            }
        }
    }

    private initDialogConfig(): void {
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.width = '375px';
        this.dialogConfig.height = '455px';
        this.dialogConfig.maxWidth = '100%';
    }

    public openLoginModalWindow(): void {
        this.dialog.open(ThankYouComponent, { ...this.dialogConfig });
    }

    public onChangeLocation(event: Event): void {
        if (this.autocompleteInputChanged$.observers.length === 0) {
            const sub = this.autocompleteInputChanged$
                .pipe(throttleTime(500, asyncScheduler, this.throttleConfig))
                .subscribe(() => this.getAutocompleteLocation(event));

            this.subscriptions.push(sub);
        }

        this.autocompleteInputChanged$.next(event);
    }

    private getAutocompleteLocation(event: Event): void {
        const text = (event.target as HTMLInputElement).value;

        if (text.length < 3) {
            this.autocompleteLocations = [];
            return;
        }

        this.autocompleteService
            .getLocationAutocomplete(text)
            .pipe(tap(console.log))
            .subscribe((locations) => (this.autocompleteLocations = locations));
    }

    private initForm(): void {
        const name = this.isSubmitted ? this.formData.name : '';
        const email = this.isSubmitted ? this.formData.email : '';
        const tel = this.isSubmitted ? this.formData.tel : '';
        const location = this.isSubmitted ? this.formData.location : '';
        const message = this.isSubmitted ? this.formData.message : '';

        this.form = this.formBuilder.group({
            name: [name, Validators.required],
            email: [email, [Validators.required, Validators.email]],
            tel: [
                tel,
                [
                    Validators.required,
                    Validators.pattern('^\\+?[0-9]+$'),
                    Validators.minLength(8),
                ],
            ],
            location: [
                location, [
                    Validators.required, 
                    this.customLocationValidator.bind(this)
                ]
            ],
            message: [message, [Validators.minLength(10)]],
        });
    }

    private customLocationValidator(
        control: AbstractControl
    ): ValidationErrors | null {
        const selectedLocation = control.value;

        if (!selectedLocation) {
            return null;
        }

        const isValid = this.autocompleteLocations.some(
            (location) => location.formatted === selectedLocation
        );

        return isValid ? null : { invalidLocation: true };
    }

    public async onSubmit(): Promise<void> {
        if (this.form.invalid || this.isLoading) return;

        this.isLoading = true;

        const body = {
            name: this.name.value,
            email: this.email.value,
            tel: this.tel.value,
            location: this.location.value,
            message: this.message.value,
        };

        this.userService.sendLetter(body).subscribe({
            next: (res) => {
                localStorage.setItem('isFormSubmitted', 'true');
                localStorage.setItem('fromData', JSON.stringify(body));
                this.isSubmitted = true;
                this.isLoading = false;

                this.openLoginModalWindow();
                this.recordCurrentDateInMs();
                
            },
            error: (err) => {
                if (err.status === 459) {
                    this.snackBar.open(err.message, '❌', {
                        duration: 3000,
                        horizontalPosition: 'center',
                        verticalPosition: 'top',
                    });
                }
                this.isLoading = false;
            },
        });

        // await new Promise(resolve => setTimeout(resolve, 1000));
    }

    private recordCurrentDateInMs(): void {
        const formSubmittedTime = new Date().getTime();
        localStorage.setItem('formSubmittedTime', formSubmittedTime.toString());
    }

    public get name(): AbstractControl {
        return this.form.get('name')!;
    }

    public get email(): AbstractControl {
        return this.form.get('email')!;
    }

    public get tel(): AbstractControl {
        return this.form.get('tel')!;
    }

    public get message(): AbstractControl {
        return this.form.get('message')!;
    }

    public get location(): AbstractControl {
        return this.form.get('location')!;
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
}
