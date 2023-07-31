import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomBreakpoints, CustomBreakpointsEnum } from 'src/shared/interfaces/ICustomBreakpoints';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

    public isMobile: boolean = false;
    public isSticky: boolean = false;
    private subscriptions: Subscription[] = [];

    constructor(private breakpointObserver: BreakpointObserver) {
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

    public onClickList(li: string): void {

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
        console.log('type', deviceType);
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());   
    }
}
