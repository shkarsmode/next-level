import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MobileHeaderComponent } from './header/mobile-header/mobile-header.component';
import { PcHeaderComponent } from './header/pc-header/pc-header.component';


const declarations = [
    HeaderComponent,
    FooterComponent,
    PcHeaderComponent,
    MobileHeaderComponent
];

@NgModule({
    declarations,
    imports: [CommonModule, RouterModule],
    exports: declarations
})
export class SharedComponentsModule { }
