import { AfterViewInit, Component } from '@angular/core';
import AOS from 'aos';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
    
    public ngAfterViewInit(): void {
        this.initAOSModule();
    }

    private initAOSModule = () => AOS.init({ once: false, duration: 500 });

}
