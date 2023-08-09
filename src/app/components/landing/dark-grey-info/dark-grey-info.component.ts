import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-dark-grey-info',
    templateUrl: './dark-grey-info.component.html',
    styleUrls: ['./dark-grey-info.component.scss']
})
export class DarkGreyInfoComponent {

    @Input() public info: any;
}
