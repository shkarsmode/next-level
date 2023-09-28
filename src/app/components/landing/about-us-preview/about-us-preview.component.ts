import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-about-us-preview',
    templateUrl: './about-us-preview.component.html',
    styleUrls: ['./about-us-preview.component.scss'],
})
export class AboutUsPreviewComponent {
    @Input() isRevert: boolean = false;
}
