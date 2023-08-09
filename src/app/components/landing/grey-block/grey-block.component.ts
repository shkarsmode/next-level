import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-grey-block',
    templateUrl: './grey-block.component.html',
    styleUrls: ['./grey-block.component.scss']
})
export class GreyBlockComponent {

    @Input() info: { [key: string]: string } = {};
}
