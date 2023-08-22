import { AfterViewInit, Component } from '@angular/core';
import AOS, { AosOptions } from 'aos';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
    
    private AOSConfig: AosOptions = { 
        once: false, 
        duration: 500, 
        anchorPlacement: 'top-top',
        offset: 50
    };

    public ngAfterViewInit(): void {
        this.initAOSModule();
    }

    private initAOSModule = () => AOS.init(this.AOSConfig);

}
