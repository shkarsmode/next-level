import { Component } from '@angular/core';
import { homeInfo } from 'src/app/shared/data/home';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

    public info: any = homeInfo;
}
