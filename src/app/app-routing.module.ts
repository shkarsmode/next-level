import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ 
		path: '', 
		loadChildren: () => import('./layouts/landing-layout/landing-layout.module').then(m => m.LandingLayoutModule)
	},
	{ path: '**', redirectTo: ''}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
