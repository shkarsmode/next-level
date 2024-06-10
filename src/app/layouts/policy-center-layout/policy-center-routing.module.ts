import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from 'src/app/components/privacy-center/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from 'src/app/components/privacy-center/terms-and-conditions/terms-and-conditions.component';
import { PolicyCenterLayoutComponent } from './policy-center-layout.component';

export const PRIVACY_POLICY_PATH: string = 'privacy-policy';
export const TERMS_AND_CONDITIONS_PATH: string = 'terms';

const routes: Routes = [
	{ 
		path: '', component: PolicyCenterLayoutComponent, children: [
			{
				path: PRIVACY_POLICY_PATH, 
				component: PrivacyPolicyComponent
			},
			{
				path: TERMS_AND_CONDITIONS_PATH, 
				component: TermsAndConditionsComponent
			},
			{
				path: '**', redirectTo: PRIVACY_POLICY_PATH
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PolicyCenterRoutingModule {}
