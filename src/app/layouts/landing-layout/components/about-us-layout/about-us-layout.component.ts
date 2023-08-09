import { Component } from '@angular/core';
import { aboutUsInfo } from 'src/app/shared/data/about-us';

@Component({
    selector: 'app-about-us-layout',
    templateUrl: './about-us-layout.component.html',
    styleUrls: ['./about-us-layout.component.scss']
})
export class AboutUsLayoutComponent {
    public aboutUsInfo: any = aboutUsInfo;
}
