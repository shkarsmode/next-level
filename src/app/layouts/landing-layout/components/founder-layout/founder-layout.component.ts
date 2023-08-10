import { Component } from '@angular/core';
import { founderInfo } from 'src/app/shared/data/founder';

@Component({
    selector: 'app-founder-layout',
    templateUrl: './founder-layout.component.html',
    styleUrls: ['./founder-layout.component.scss']
})
export class FounderLayoutComponent {

    public info: any = founderInfo;
}
