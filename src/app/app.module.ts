import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThankYouComponent } from './shared/dialogs/thank-you/thank-you.component';

@NgModule({
    declarations: [AppComponent, ThankYouComponent],
    imports: [
        BrowserModule, 
        AppRoutingModule, BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
