import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-dark-block',
    templateUrl: './dark-block.component.html',
    styleUrls: ['./dark-block.component.scss']
})
export class DarkBlockComponent {

    @Input() info: any; 
}
