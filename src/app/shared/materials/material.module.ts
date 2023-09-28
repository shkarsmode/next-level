import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';


const Materials = [
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatAutocompleteModule
];

@NgModule({
    imports: Materials,
    exports: Materials
})
export class MaterialModule {}
