import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    PrivacyPolicyComponent,
    TermsAndConditionsComponent
} from '@components/privacy-center';


@NgModule({
    declarations: [
        PrivacyPolicyComponent,
        TermsAndConditionsComponent
    ],
    imports: [CommonModule]
})
export class PrivacyCenterModule { }
