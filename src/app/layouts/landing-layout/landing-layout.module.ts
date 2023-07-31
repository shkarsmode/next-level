import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LandingModule } from 'src/app/components/landing/landing.module';
import { LandingRoutingModule } from './landing-routing.module';


@NgModule({
    imports: [
        CommonModule,
        LandingRoutingModule,
        LandingModule
    ]
})
export class LandingLayoutModule { }
