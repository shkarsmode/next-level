import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
    FooterComponent,
    HeaderComponent,
    MobileHeaderComponent,
    PcHeaderComponent
} from '@components/shared';


const SharedComponents = [
    HeaderComponent,
    FooterComponent,
    PcHeaderComponent,
    MobileHeaderComponent
];

@NgModule({
    declarations: SharedComponents,
    imports: [CommonModule, RouterModule],
    exports: SharedComponents
})
export class SharedComponentsModule { }
