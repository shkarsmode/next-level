import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LandingModule } from 'src/app/components/landing/landing.module';
import { SharedComponentsModule } from 'src/app/components/shared/shared-components.module';
import { LandingRoutingModule } from './landing-layout-routing.module';
import { LandingLayoutComponent } from './landing-layout.component';


@NgModule({
    declarations: [LandingLayoutComponent],
    imports: [
        CommonModule,
        LandingRoutingModule,
        LandingModule,
        SharedComponentsModule
    ]
})
export class LandingLayoutModule { }
