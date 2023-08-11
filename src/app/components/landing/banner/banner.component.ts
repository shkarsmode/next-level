import { Component, Input } from '@angular/core';
import { ScrollToService } from 'src/app/shared/services/scroll-to.service';


@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

    @Input() info: any;

    constructor(
        private scrollToService: ScrollToService
    ) {}

    public scrollTo(selector: string): void {
        this.scrollToService.scroll(selector);
    }
}
