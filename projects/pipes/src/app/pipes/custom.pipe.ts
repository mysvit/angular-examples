import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'customPipe'
})
export class CustomPipe implements PipeTransform {

    transform(value: string, pType: PipeType): unknown {
        switch (pType) {
            case PipeType.toUpper:
                return value.toUpperCase()
            case PipeType.toLower:
                return value.toLowerCase()
            default:
                return value
        }
    }

}

export enum PipeType {
    toUpper,
    toLower
}
