import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/materials/material.module';
import { AutocompleteHighlightPipe } from 'src/app/shared/pipes/autocomplete-highlight.pipe';
import { AboutUsPreviewComponent } from './about-us-preview/about-us-preview.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './contact/form/form.component';
import { DarkGreyInfoComponent } from './dark-grey-info/dark-grey-info.component';
import { FounderStoryComponent } from './founder-story/founder-story.component';
import { GreyInfoComponent } from './grey-info/grey-info.component';
import { CardComponent } from './what-we-do/card/card.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';

const declarations = [
    BannerComponent,
    WhatWeDoComponent,
    CardComponent,
    AboutUsComponent,
    FounderStoryComponent,
    ContactComponent,
    FormComponent,
    GreyInfoComponent,
    DarkGreyInfoComponent,
    AboutUsPreviewComponent
];

@NgModule({
    declarations: [
        ...declarations,
        AutocompleteHighlightPipe
    ],
    imports: [
        CommonModule, 
        ReactiveFormsModule,
        MaterialModule,
        RouterModule
    ],
    exports: declarations
})
export class LandingModule {}
