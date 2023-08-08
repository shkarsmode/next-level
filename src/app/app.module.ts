import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BASE_PATH_API, GEO_API_KEY, GEO_PATH_API } from './shared/services/variables';
import { PreloaderComponent } from './shared/components/preloader/preloader.component';

@NgModule({
    declarations: [
        AppComponent,
        PreloaderComponent
    ],
    imports: [
        BrowserModule, 
        AppRoutingModule, 
        BrowserAnimationsModule,
        HttpClientModule 
    ],
    providers: [
        { provide: BASE_PATH_API, useValue: environment.basePathApi },
        { provide: GEO_API_KEY, useValue: environment.geoApiKey },
        { provide: GEO_PATH_API, useValue: environment.geoPathAPI },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
