import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
    selector: 'app-landing',
    templateUrl: './landing-layout.component.html',
    styleUrls: ['./landing-layout.component.scss']
})
export class LandingLayoutComponent {

    constructor(private router: Router) { }

    public ngOnInit(): void {
        this.initScrollToTopObserver();
    }

    public initScrollToTopObserver(): void {
        this.router.events
            .pipe(delay(100))
            .subscribe(() => window.scrollTo(0, 0));
    }
}
