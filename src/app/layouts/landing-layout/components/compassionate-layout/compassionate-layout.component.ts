import { Component } from '@angular/core';
import { compassionateInfo } from 'src/app/shared/data/compassionate';

@Component({
    selector: 'app-compassionate-layout',
    templateUrl: './compassionate-layout.component.html',
    styleUrls: ['./compassionate-layout.component.scss']
})
export class CompassionateLayoutComponent {

    public info: any = compassionateInfo;
}
