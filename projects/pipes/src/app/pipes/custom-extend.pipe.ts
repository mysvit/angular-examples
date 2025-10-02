import { inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core'
import { DatePipe } from '@angular/common'

@Pipe({
    name: 'customExtendPipe'
})
export class customExtendPipe implements PipeTransform {

    private datePipe: DatePipe = new DatePipe(inject(LOCALE_ID))

    transform(value: Date | string, isCustom: boolean = false) {
        if (isCustom) {
            const date = new Date(value)
            return date
        } else {
            return this.datePipe.transform(value, 'yyyy-MM-dd')
        }
    }

}
