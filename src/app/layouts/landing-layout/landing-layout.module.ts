import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LandingModule } from 'src/app/components/landing/landing.module';
import { SharedComponentsModule } from 'src/app/components/shared/shared-components.module';
import { AboutUsLayoutComponent } from './components/about-us-layout/about-us-layout.component';
import { CompassionateLayoutComponent } from './components/compassionate-layout/compassionate-layout.component';
// import { FounderLayoutComponent } from './components/founder-layout/founder-layout.component';
import { FounderLayoutComponent } from './components/founder-layout/founder-layout.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { LandingRoutingModule } from './landing-layout-routing.module';
import { LandingLayoutComponent } from './landing-layout.component';

@NgModule({
    declarations: [
        LandingLayoutComponent,
        MainLayoutComponent, 
        AboutUsLayoutComponent, 
        FounderLayoutComponent, 
        CompassionateLayoutComponent
    ],
    imports: [
        CommonModule,
        LandingRoutingModule,
        LandingModule,
        SharedComponentsModule,
    ],
})
export class LandingLayoutModule {}
