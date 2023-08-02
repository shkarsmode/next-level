import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingLayoutComponent } from './landing-layout.component';

const routes: Routes = [
	{ 
		path: '', component: LandingLayoutComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LandingRoutingModule {}
