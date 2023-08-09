import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-white-block',
    templateUrl: './white-block.component.html',
    styleUrls: ['./white-block.component.scss']
})
export class WhiteBlockComponent {

    @Input() public info: any;
}
