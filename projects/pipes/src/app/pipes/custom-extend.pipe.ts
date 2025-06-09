import {Inject, LOCALE_ID, Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from "@angular/common";

@Pipe({
    name: 'customExtendPipe',
})
export class customExtendPipe implements PipeTransform {

    private datePipe: DatePipe

    constructor(@Inject(LOCALE_ID) private locale: string) {
        // Instantiate the base CurrencyPipe
        this.datePipe = new DatePipe(locale)
    }

    transform(value: Date | string, isCustom: boolean = false) {
        if (isCustom) {
            const date = new Date(value)
            return date.getFullYear()
        } else {
            return this.datePipe.transform(value)
        }
    }

}
