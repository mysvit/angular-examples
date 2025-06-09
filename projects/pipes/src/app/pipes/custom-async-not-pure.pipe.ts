import {Pipe, PipeTransform, signal} from '@angular/core';

@Pipe({
    name: 'customAsyncPipeNotPure',
    pure: false
})
export class customAsyncPipeNotPurePipe implements PipeTransform {

    asyncValue = signal(0)

    // WITHOUT signal
    // value = 0
    // constructor(private _ref: ChangeDetectorRef) {}

    transform(value: number, arg: number) {

        setTimeout(() => {
            this.asyncValue.set(value * arg)

            // WITHOUT signal
            // this.value = value * arg
            // this._ref.markForCheck()
        }, 2000)

        // WITHOUT signal
        // return this.value

        return this.asyncValue()
    }

}
