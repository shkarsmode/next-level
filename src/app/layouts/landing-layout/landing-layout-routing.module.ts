import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { privateLinksGuard } from 'src/app/shared/helpers/private-links.guard';
import { AboutUsLayoutComponent } from './components/about-us-layout/about-us-layout.component';
import { CompassionateLayoutComponent } from './components/compassionate-layout/compassionate-layout.component';
import { FounderLayoutComponent } from './components/founder-layout/founder-layout.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { LandingLayoutComponent } from './landing-layout.component';

const routes: Routes = [
	{ 
		path: '', 
		component: LandingLayoutComponent,
		children: [
			{
				path: '', redirectTo: '', pathMatch: 'full' 
			},
			{ path: '', component: MainLayoutComponent },
			{ path: 'about-us', component: AboutUsLayoutComponent },
			{ 
				path: 'founders-story', 
				component: FounderLayoutComponent, 
				canActivate: [privateLinksGuard]
			},
			{ path: 'compassionate-use', component: CompassionateLayoutComponent }
		]
	},
	// { path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LandingRoutingModule {}
