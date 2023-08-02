import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
    selector: 'app-policy-center-layout',
    templateUrl: './policy-center-layout.component.html',
    styleUrls: ['./policy-center-layout.component.scss']
})
export class PolicyCenterLayoutComponent implements OnInit {

    constructor(private router: Router) { }

    public ngOnInit(): void {
        this.scrollToTop();
    }

    public scrollToTop(): void {
        this.router.events
            .pipe(delay(100))
            .subscribe(() => window.scrollTo(0, 0));
    }
}
