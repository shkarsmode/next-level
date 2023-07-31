import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-pc-header',
    templateUrl: './pc-header.component.html',
    styleUrls: ['./pc-header.component.scss']
})
export class PcHeaderComponent {

    @Output() onClickList: EventEmitter<string> = new EventEmitter();
    @Input() isSticky: boolean = false;

    public onClickLi(li: string): void {
        this.onClickList.emit(li);
    }
}
