import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from 'src/app/layouts/landing-layout/landing.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './contact/form/form.component';
import { FooterComponent } from './footer/footer.component';
import { FounderStoryComponent } from './founder-story/founder-story.component';
import { HeaderComponent } from './header/header.component';
import { MobileHeaderComponent } from './header/mobile-header/mobile-header.component';
import { PcHeaderComponent } from './header/pc-header/pc-header.component';
import { CardComponent } from './what-we-do/card/card.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';

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
    FounderStoryComponent,
    ContactComponent,
    FormComponent,
    FooterComponent
];

@NgModule({
    declarations,
    imports: [
        CommonModule, 
        ReactiveFormsModule
    ]
})
export class LandingModule {}
