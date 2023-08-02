import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ThankYouComponent } from 'src/app/shared/dialogs/thank-you/thank-you.component';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    public form: FormGroup;
    public isLoading: boolean = false;
    private dialogConfig: MatDialogConfig = new MatDialogConfig();

    constructor(
        private formBuilder: FormBuilder,
        private dialog: MatDialog,
    ) {}

    public ngOnInit(): void {
        this.initForm();
        this.initDialogConfig();
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
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            tel: ['', [
                Validators.required, 
                Validators.pattern('^\\+?[0-9]+$'), 
                Validators.minLength(8)
            ]],
            message: ['', [Validators.required, Validators.minLength(10)]]
        });
    }

    public async onSubmit(): Promise<void> {
        if (this.form.invalid || this.isLoading) return;

        this.isLoading = true;

        await new Promise(resolve => setTimeout(resolve, 1000));
        this.isLoading = false;

        this.openLoginModalWindow();
        console.log('Form submitted', this.form.value);
        
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
}