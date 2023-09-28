import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-preloader',
    templateUrl: './preloader.component.html',
    styleUrls: ['./preloader.component.scss'],
})
export class PreloaderComponent {
    @Input() isLoading: boolean = true;

    public ngOnInit(): void {
        this.removePreloaderForDevelopment();
    }

    private removePreloaderForDevelopment(): void {
        const isNotShowPreloader = !!localStorage.getItem('isNotShowPreloader');
        if (isNotShowPreloader) {
            this.isLoading = false;
            return;
        }

        setTimeout(() => (this.isLoading = false), 2700);
    }
}
