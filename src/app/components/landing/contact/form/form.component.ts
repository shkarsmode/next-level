import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThankYouComponent } from 'src/app/shared/dialogs/thank-you/thank-you.component';
import { ISubmitForm } from 'src/app/shared/interfaces/ISubmitForm';
import { UserService } from '../../../../shared/services/user.service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    public form: FormGroup;
    public isLoading: boolean = false;
    public isSubmitted: boolean = false;

    private dialogConfig: MatDialogConfig = new MatDialogConfig();
    private formData: ISubmitForm;

    constructor(
        private formBuilder: FormBuilder,
        private dialog: MatDialog,
        private userService: UserService,
        private snackBar: MatSnackBar
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

    private initForm(): void {
        if (this.isSubmitted){
            this.form = this.formBuilder.group({
                name: [this.formData.name, Validators.required],
                email: [this.formData.email, [Validators.required, Validators.email]],
                tel: [this.formData.tel, [
                    Validators.required, 
                    Validators.pattern('^\\+?[0-9]+$'), 
                    Validators.minLength(8)
                ]],
                location: [this.formData.location, Validators.required],
                message: [this.formData.message, [Validators.minLength(10)]]
            });
            return;
        }

        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            tel: ['', [
                Validators.required, 
                Validators.pattern('^\\+?[0-9]+$'), 
                Validators.minLength(8)
            ]],
            location: ['', Validators.required],
            message: ['', [Validators.minLength(10)]]
        });
    }

    public async onSubmit(): Promise<void> {
        if (this.form.invalid || this.isLoading) return;

        this.isLoading = true;

        const body = {
            name: this.name.value,
            email: this.email.value,
            tel: this.tel.value,
            location: this.location.value,
            message: this.message.value
        };

        this.userService.sendLetter(body)
            .subscribe({
                next: (res) => {
                    localStorage.setItem('isFormSubmitted', 'true');
                    localStorage.setItem('fromData',  JSON.stringify(body));
                    this.isSubmitted = true;
                    this.isLoading = false;
                    
                    this.openLoginModalWindow();
                },
                error: (err) => {
                    if (err.status === 459) {
                        this.snackBar.open(err.message, '❌', {
                            duration: 3000,
                            horizontalPosition: 'center',
                            verticalPosition: 'top'
                        });
                    }
                    this.isLoading = false;
                }
            });

        // await new Promise(resolve => setTimeout(resolve, 1000));
    }

    public get name (): AbstractControl {
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
