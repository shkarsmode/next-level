import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'autocompleteHighlight',
})
export class AutocompleteHighlightPipe implements PipeTransform {
    transform(value: string, searchText: string): string {
        if (!searchText || !value) {
            return value;
        }
    
        const pattern = new RegExp(searchText, 'gi');
        return value.replace(pattern, match => `<strong>${match}</strong>`);
    }
}
