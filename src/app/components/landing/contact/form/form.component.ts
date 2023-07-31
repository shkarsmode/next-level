import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    public form: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    public ngOnInit(): void {
        this.initForm();
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

    public onSubmit(): void {
        console.log('onSubmit');
        if (this.form.valid) {
          // Handle form submission here
            console.log('Form submitted', this.form.value);
        }
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
