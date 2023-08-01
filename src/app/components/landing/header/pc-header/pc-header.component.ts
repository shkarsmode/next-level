import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-pc-header',
    templateUrl: './pc-header.component.html',
    styleUrls: ['./pc-header.component.scss']
})
export class PcHeaderComponent {

    @Output() onClickList: EventEmitter<{selector: string, speed: number}> = new EventEmitter();
    @Input() isSticky: boolean = false;

    public onClickLi(selector: string, speed: number = 1000): void {
        this.onClickList.emit({selector, speed});
    }
}
