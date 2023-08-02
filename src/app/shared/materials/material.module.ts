import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


const Materials = [
    MatDialogModule,
    MatProgressSpinnerModule
];

@NgModule({
    declarations: [],
    imports: [Materials],
    exports: [Materials]
})
export class MaterialModule {}
