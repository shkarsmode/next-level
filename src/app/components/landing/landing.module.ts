import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './contact/form/form.component';
import { FounderStoryComponent } from './founder-story/founder-story.component';
import { CardComponent } from './what-we-do/card/card.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';

const declarations = [
    BannerComponent,
    WhatWeDoComponent,
    CardComponent,
    AboutUsComponent,
    FounderStoryComponent,
    ContactComponent,
    FormComponent
];

@NgModule({
    declarations,
    imports: [
        CommonModule, 
        ReactiveFormsModule
    ],
    exports: declarations
})
export class LandingModule {}
