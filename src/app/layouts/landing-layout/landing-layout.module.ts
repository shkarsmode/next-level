import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutUsComponent } from 'src/app/components/landing/about-us/about-us.component';
import { BannerComponent } from 'src/app/components/landing/banner/banner.component';
import { FounderStoryComponent } from 'src/app/components/landing/founder-story/founder-story.component';
import { CardComponent } from 'src/app/components/landing/what-we-do/card/card.component';
import { WhatWeDoComponent } from 'src/app/components/landing/what-we-do/what-we-do.component';
import { FooterComponent } from '../../components/landing/footer/footer.component';
import { HeaderComponent } from '../../components/landing/header/header.component';
import { MobileHeaderComponent } from '../../components/landing/header/mobile-header/mobile-header.component';
import { PcHeaderComponent } from '../../components/landing/header/pc-header/pc-header.component';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';

const declarations = [
    LandingComponent, 
    HeaderComponent, 
    FooterComponent, 
    PcHeaderComponent,
    MobileHeaderComponent,
    BannerComponent,
    WhatWeDoComponent,
    CardComponent,
    AboutUsComponent, 
    FounderStoryComponent
];

@NgModule({
    declarations,
    imports: [
        CommonModule,
        LandingRoutingModule
    ]
})
export class LandingLayoutModule { }
