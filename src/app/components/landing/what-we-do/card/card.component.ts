import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ICard } from 'src/app/shared/interfaces/ICard';


@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent {

    @Input() card: ICard;
    @ViewChild('cardElement', { static: true }) cardElement: ElementRef;

    public readonly imgPath: string = 'assets/img/';
    public readonly imgExtension: string = '.webp';

    public onMouseMove(event: MouseEvent): void {
        const wrap = event.target as HTMLElement;
        const coordBox = wrap.getBoundingClientRect();
        const centerPointX = coordBox.x + coordBox.width / 2;
        const centerPointY = coordBox.y + coordBox.height / 2;

        const centerPoint = `${centerPointX} || ${centerPointY}`;

        const maxRotation = 15;

        //Y rotation
        const rotationFactorY = maxRotation / (coordBox.width / 2);
        const yRotation = Math.ceil(
            (event.clientX - centerPointX) * rotationFactorY
        );

        //X rotation
        const rotationFactorX = maxRotation / (coordBox.height / 2);
        const xRotation =
            -1 *
            Math.ceil((event.clientY - centerPointY) * rotationFactorX);

        this.cardElement.nativeElement.style.cssText = 
            `transform: rotateY(${yRotation}deg) rotateX(${xRotation}deg);`;
    }

    public onMouseOut(): void {
        this.cardElement.nativeElement.style.cssText = `transform: rotateY(0deg) rotateX(0deg);`;
    }
}
