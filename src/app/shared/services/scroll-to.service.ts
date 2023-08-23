import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

interface ScrollOptions {
    startY: number;
    distance: number;
    start: number | null;
    duration: number;
}

@Injectable({
    providedIn: 'root',
})
export class ScrollToService {

    private options: ScrollOptions;

    constructor(@Inject(DOCUMENT) private document: Document) {}

    /**
    * Scrolls the window to a specified element on the page.
    *
    * @param {string} selector - The CSS selector for the element to scroll to.
    * @param {number} [duration=1500] - The duration of the scroll animation in milliseconds.
    *
    * @returns {void} - This function does not return anything.
    * The scrolling happens as a side effect of calling this function.
    */
    public scroll(selector: string, duration: number = 1500): void {
        const existingComponents = [
            'app-banner',
            'app-contact',
            'app-about-us'
        ];
        selector = existingComponents.find(component => component.includes(selector)) as string;
        
        if (!selector) return;

        const element = document.querySelector(selector);
        let startY;

        const scrollableContainer = this.currentScrollableContainer;
        
        if (scrollableContainer instanceof Window) startY = window.pageYOffset;
        else startY = scrollableContainer.scrollTop;
        
        const endY = element!.getBoundingClientRect().top + window.pageYOffset;

        this.options = {
            duration: duration,
            startY,
            distance: endY - startY,
            start: null
        };

        window.requestAnimationFrame(this.animationFrame.bind(this));
    }

    /**
    * Animates the scrolling of the window to a specified element on the page.
    *
    * @param {number} timestamp - The timestamp of the current animation frame.
    *
    * @returns {void} - This function does not return anything.
    */
    private animationFrame(timestamp: number): void {
        if (!this.options.start) this.options.start = timestamp;
        
        const elapsed = timestamp - this.options.start;
        const progress = Math.min(elapsed / this.options.duration, 1);
        
        this.currentScrollableContainer
            .scrollTo(0, this.options.startY + this.options.distance * progress);

        if (elapsed < this.options.duration) 
            window.requestAnimationFrame(this.animationFrame.bind(this));
        
    }

    private get currentScrollableContainer(): Window | HTMLDivElement {
        const url = this.document.location.href;
        const isScrollableWindow = !url.includes('profile');

        if (isScrollableWindow) return window;

        const selectorOfProfileLayoutContent = '.mat-drawer-content > .content';
        return document.querySelector(selectorOfProfileLayoutContent) as HTMLDivElement;
    }
}
