import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
    AboutUsComponent,
    AboutUsPreviewComponent,
    BannerComponent,
    CardComponent,
    ContactComponent,
    DarkBlockComponent,
    DarkInfoComponent,
    FormComponent,
    FounderBlockComponent,
    FounderStoryComponent,
    GreyBlockComponent,
    GreyInfoComponent,
    QuoteComponent,
    WhatWeDoComponent,
    WhiteBlockComponent
} from '@components/landing';
import { MaterialModule } from '@shared/materials';
import { AutocompleteHighlightPipe } from '@shared/pipes';


const LandingComponents = [
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
        ...LandingComponents,
        AutocompleteHighlightPipe,
    ],
    imports: [
        CommonModule, 
        ReactiveFormsModule,
        MaterialModule,
        RouterModule
    ],
    exports: LandingComponents
})
export class LandingModule {}
