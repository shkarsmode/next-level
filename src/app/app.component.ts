import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener } from '@angular/core';
import AOS, { AosOptions } from 'aos';
import { Subject, ThrottleConfig, asyncScheduler, takeUntil, throttleTime } from 'rxjs';

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
    private throttleConfig: ThrottleConfig = { leading: false, trailing: true };
    private windowScroll$: Subject<void> = new Subject();
    private destroy$: Subject<void> = new Subject<void>();

    public ngAfterViewInit(): void {
        this.initAOSModule();
        this.greetingLogInConsole();
    }

    constructor(private cdr: ChangeDetectorRef) {}

    @HostListener('window:scroll')
    public onWindowScroll(): void {
        if (this.windowScroll$.observers.length === 0) {
            this.windowScroll$
                .pipe(
                    throttleTime(500, asyncScheduler, this.throttleConfig),
                    takeUntil(this.destroy$)
                )
                .subscribe(() => this.cdr.detectChanges());
        }

        this.windowScroll$.next();
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
