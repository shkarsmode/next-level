import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    ValidationErrors,
    Validators,
} from '@angular/forms';
import { IGeoLocation, ISubmitForm } from '@shared/interfaces';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
    public form: FormGroup;
    
    @Output() onChangeLocation: EventEmitter<Event> = new EventEmitter(); 
    @Output() onSubmit: EventEmitter<ISubmitForm> = new EventEmitter(); 

    @Input() formData: ISubmitForm;
    @Input() isLoading: boolean = false;
    @Input() isSubmitted: boolean = false;
    @Input() autocompleteLocations: IGeoLocation[] = [];

    constructor(
        private formBuilder: FormBuilder
    ) {}

    public ngOnInit(): void {
        this.initForm();
    }

    public onChangeLocationEvent(event: Event): void {
        this.onChangeLocation.emit(event);
    }

    public async onSubmitEvent(): Promise<void> {
        if (this.form.invalid || this.isLoading) return;

        const body: ISubmitForm = {
            name: this.name.value,
            email: this.email.value,
            tel: this.tel.value,
            location: this.location.value,
            message: this.message.value,
        };

        this.onSubmit.emit(body);
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
                location,
                [Validators.required, this.customLocationValidator.bind(this)],
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
}
