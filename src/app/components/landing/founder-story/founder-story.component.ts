import { Component } from '@angular/core';

@Component({
    selector: 'app-founder-story',
    templateUrl: './founder-story.component.html',
    styleUrls: ['./founder-story.component.scss']
})
export class FounderStoryComponent {

    public isShowMore: boolean = false;

    public toggleList(): void {
        this.isShowMore = !this.isShowMore;
    }
}
