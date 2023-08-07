import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomBreakpoints, CustomBreakpointsEnum } from 'src/app/shared/interfaces/ICustomBreakpoints';
import { ScrollToService } from 'src/app/shared/services/scroll-to.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

    public isMobile: boolean = false;
    public isSticky: boolean = false;
    private subscriptions: Subscription[] = [];

    constructor(
        private breakpointObserver: BreakpointObserver,
        private scrollTo: ScrollToService
    ) {
        this.subscribeOnBreakpointChanges();
    }

    public ngOnInit(): void {
        this.determineShowingHeader();
    }

    @HostListener('window:scroll')
    public determineShowingHeader(): void {
        const currentScroll = window.scrollY;
        this.isSticky = currentScroll > 200 ? true : false;
    }

    public async onClickList({selector, speed}: {selector: string, speed: number}): Promise<void> {
        await new Promise(resolve => setTimeout(resolve, 50));
        this.scrollTo.scroll(selector, speed);
    }

    private subscribeOnBreakpointChanges(): void {
        const deviceKeys = 
            Object.keys(CustomBreakpointsEnum) as CustomBreakpoints[];

        deviceKeys.forEach(breakpoint => {
            const sub = 
                this.breakpointObserver.observe([CustomBreakpointsEnum[breakpoint]])
                    .subscribe(result => {
                        if (result.matches) {
                            this.determineHansetForHeaders(CustomBreakpointsEnum[breakpoint]);
                        }
                    });

            this.subscriptions.push(sub);
        });
    }

    private determineHansetForHeaders(deviceType: CustomBreakpointsEnum): void {
        this.isMobile = deviceType === CustomBreakpointsEnum.Handset ? true : false;
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());   
    }
}
