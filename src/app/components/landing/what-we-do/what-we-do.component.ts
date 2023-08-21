import { Component, Input } from '@angular/core';
import { ICard } from 'src/app/shared/interfaces/ICard';


@Component({
    selector: 'app-what-we-do',
    templateUrl: './what-we-do.component.html',
    styleUrls: ['./what-we-do.component.scss']
})
export class WhatWeDoComponent {

    @Input() public cards: ICard[];
    @Input() public title: string;
    
}
