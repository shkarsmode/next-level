import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-mobile-header',
    templateUrl: './mobile-header.component.html',
    styleUrls: ['./mobile-header.component.scss']
})
export class MobileHeaderComponent {

    @Output() onClickList: EventEmitter<{selector: string, speed: number}> = new EventEmitter();
    @Input() isSticky: boolean = false;

    public isOpenMenu: boolean = false;

    public onClickLi(selector: string, speed: number = 1000): void {
        this.onClickList.emit({selector, speed});
    }

    public toggleMenu(): void {
        this.isOpenMenu = !this.isOpenMenu;
    }

    
}
