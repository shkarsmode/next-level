import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThankYouComponent } from '@shared/dialogs';
import { IGeoLocation, ISubmitForm } from '@shared/interfaces';
import { AutocompleteService, UserService } from '@shared/services';
import {
    Subject,
    ThrottleConfig,
    asyncScheduler,
    takeUntil,
    tap,
    throttleTime
} from 'rxjs';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit, OnDestroy {
    public autocompleteLocations: IGeoLocation[] = [];
    public isSubmitted: boolean = false;
    public isLoading: boolean = false;
    public formData: ISubmitForm;

    private autocompleteInputChanged$: Subject<Event> = new Subject<Event>();
    private throttleConfig: ThrottleConfig = { leading: false, trailing: true };
    private destroy$: Subject<void> = new Subject<void>();
    private dialogConfig: MatDialogConfig = new MatDialogConfig();

    constructor(
        private autocompleteService: AutocompleteService,
        private userService: UserService,
        private dialog: MatDialog,
        private snackBar: MatSnackBar,
        private cdr: ChangeDetectorRef
    ) {}

    public ngOnInit(): void {
        this.getIsSubmittedAndFormData();
        this.initDialogConfig();
    }

    public onChangeLocation(event: Event): void {
        if (this.autocompleteInputChanged$.observers.length === 0) {
            this.autocompleteInputChanged$
                .pipe(
                    throttleTime(500, asyncScheduler, this.throttleConfig),
                    takeUntil(this.destroy$)
                )
                .subscribe(() => this.getAutocompleteLocation(event));
        }

        this.autocompleteInputChanged$.next(event);
    }

    public onSubmitForm(body: ISubmitForm): void {
        this.isLoading = true;
        this.userService.sendLetter(body)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: _ => {
                    localStorage.setItem('isFormSubmitted', 'true');
                    localStorage.setItem('fromData', JSON.stringify(body));
                    
                    this.isSubmitted = true;
                    this.isLoading = false;

                    this.openLoginModalWindow();
                    this.recordCurrentDateInMs();

                    this.cdr.markForCheck();
                },
                error: err => {
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
    }

    private getIsSubmittedAndFormData(): void {
        this.isSubmitted = !!localStorage.getItem('isFormSubmitted');

        if (this.isSubmitted) {
            this.formData = JSON.parse(localStorage.getItem('fromData')!);
            const formSubmittedTimeStr = localStorage.getItem(
                'formSubmittedTime'
            ) as string;
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

    private recordCurrentDateInMs(): void {
        const formSubmittedTime = new Date().getTime();
        localStorage.setItem('formSubmittedTime', formSubmittedTime.toString());
    }

    private getAutocompleteLocation(event: Event): void {
        const text = (event.target as HTMLInputElement).value;

        if (text.length < 3) {
            this.autocompleteLocations = [];
            return;
        }

        this.autocompleteService
            .getLocationAutocomplete(text)
            .pipe(
                tap(console.log),
                takeUntil(this.destroy$)
            )
            .subscribe(locations => {
                this.autocompleteLocations = locations;
                this.cdr.markForCheck();
            });
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

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
