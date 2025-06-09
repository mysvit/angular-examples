import {Pipe, PipeTransform} from '@angular/core';
import {delay, map, of} from "rxjs";
import {tap} from "rxjs/operators";

@Pipe({
    name: 'customAsyncPipe'
})
export class CustomAsyncPipe implements PipeTransform {

    transform(value: number, arg: number) {
        return of(arg)
            .pipe(
                delay(2000),
                tap(() => console.log('async wait 2 seconds')),
                map(num => value * num)
            )
    }

}
