import { Component } from '@angular/core';
import { ICard } from 'src/shared/interfaces/ICard';

@Component({
    selector: 'app-what-we-do',
    templateUrl: './what-we-do.component.html',
    styleUrls: ['./what-we-do.component.scss']
})
export class WhatWeDoComponent {

    public cards: ICard[] = cards;
    
}


const cards: ICard[] = [
    {
        image: 'stethoscope',
        header: 'Concierge Oncology',
        description: 'The highest level of personalized care and attention to detail throughout your cancer journey'
    },
    {
        image: 'wellness',
        header: 'Prevention and Wellness',
        description: 'Cutting-edge diagnostics and preventative care focused on breakthrough science for best prevention and overall health'
    },
    {
        image: 'heart',
        header: 'Integrative Family Care',
        description: 'An integrated approach from prevention to care focused on the changing needs with time of each family member'
    },
];
