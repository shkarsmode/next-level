import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from 'src/app/components/privacy-center/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from 'src/app/components/privacy-center/terms-and-conditions/terms-and-conditions.component';
import { PolicyCenterLayoutComponent } from './policy-center-layout.component';

const routes: Routes = [
	{ 
		path: '', component: PolicyCenterLayoutComponent, children: [
			{
				path: 'privacy-policy', component: PrivacyPolicyComponent
			},
			{
				path: 'terms-and-conditions', component: TermsAndConditionsComponent
			},
			{
				path: '**', redirectTo: 'privacy-policy'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PolicyCenterRoutingModule {}
