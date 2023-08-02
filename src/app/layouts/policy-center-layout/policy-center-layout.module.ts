import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from 'src/app/components/shared/shared-components.module';
import { PolicyCenterLayoutComponent } from './policy-center-layout.component';
import { PolicyCenterRoutingModule } from './policy-center-routing.module';



@NgModule({
    declarations: [
        PolicyCenterLayoutComponent
    ],
    imports: [
        CommonModule,
        SharedComponentsModule,
        PolicyCenterRoutingModule
    ]
})
export class PolicyCenterLayoutModule { }
