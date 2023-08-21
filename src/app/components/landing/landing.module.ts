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
import { DarkBlockComponent } from './dark-block/dark-block.component';
import { DarkInfoComponent } from './dark-info/dark-info.component';
import { FounderBlockComponent } from './founder-block/founder-block.component';
import { FounderStoryComponent } from './founder-story/founder-story.component';
import { GreyBlockComponent } from './grey-block/grey-block.component';
import { GreyInfoComponent } from './grey-info/grey-info.component';
import { QuoteComponent } from './quote/quote.component';
import { CardComponent } from './what-we-do/card/card.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { WhiteBlockComponent } from './white-block/white-block.component';

const declarations = [
    BannerComponent,
    WhatWeDoComponent,
    CardComponent,
    AboutUsComponent,
    FounderStoryComponent,
    ContactComponent,
    FormComponent,
    GreyInfoComponent,
    DarkInfoComponent,
    AboutUsPreviewComponent,
    GreyBlockComponent,
    QuoteComponent,
    WhiteBlockComponent,
    FounderBlockComponent,
    DarkBlockComponent
];

@NgModule({
    declarations: [
        ...declarations,
        AutocompleteHighlightPipe,
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
