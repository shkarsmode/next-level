import { Component } from '@angular/core';
import { ScrollToService } from '@shared/services';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    constructor(private scrollTo: ScrollToService) {}

    public onClickLi(selector: string, speed: number = 500): void {
        this.scrollTo.scroll(selector, speed);
    }
}
