import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import AOS, { AosOptions } from 'aos';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
    private AOSConfig: AosOptions = {
        once: false,
        duration: 500,
        anchorPlacement: 'top-top',
        offset: 50,
    };

    public ngAfterViewInit(): void {
        this.initAOSModule();
        this.greetingLogInConsole();
    }

    private greetingLogInConsole(): void {
        console.clear();
        console.log(
            '%cNextLevel Oncology ❤️',
            `
                padding: 0.4rem 1.5rem; 
                font-family: "Lucida Console"; 
                font-size: 4em; line-height: 1.4em; 
                color: white; 
                background-color: #4158D0; 
                background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
            `
        );
    }

    private initAOSModule = () => AOS.init(this.AOSConfig);
}
