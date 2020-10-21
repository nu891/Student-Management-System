import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(items: any[], text: string): any[] {

        if (!items) { return []; }

        if (!text) { return items; }

        text = text.toLowerCase();
        return items.filter(it => {
            return it.toLowerCase().includes(text);
        });
    }
}
