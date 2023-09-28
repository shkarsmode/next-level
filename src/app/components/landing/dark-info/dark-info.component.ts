import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-dark-info',
    templateUrl: './dark-info.component.html',
    styleUrls: ['./dark-info.component.scss'],
})
export class DarkInfoComponent {
    @Input() public info: any;
}
