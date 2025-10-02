import { Pipe, PipeTransform, signal } from '@angular/core'

@Pipe({
    name: 'customAsyncPipeNotPure',
    pure: false
})
export class customAsyncPipeNotPurePipe implements PipeTransform {

    // *********** WITHOUT signal ******************
    // value?: number
    //
    // constructor(private _ref: ChangeDetectorRef) {
    // }
    //
    // transform(value: number, arg: number) {
    //     setTimeout(() => {
    //         this.value = value * arg
    //         this._ref.markForCheck()
    //     }, 3000)
    //
    //     return this.value
    // }

    asyncValue = signal<number | null>(null)

    transform(value: number, arg: number) {
        setTimeout(() => {
            this.asyncValue.set(value * arg)
        }, 3000)
        return this.asyncValue()
    }

}
