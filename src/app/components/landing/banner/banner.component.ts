import { Component, Input } from '@angular/core';
import { ScrollToService } from '@shared/services';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
    @Input() info: any;

    constructor(private scrollToService: ScrollToService) {}

    public scrollTo(selector: string): void {
        this.scrollToService.scroll(selector);
    }
}
