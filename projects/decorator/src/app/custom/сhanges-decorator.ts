import {SimpleChanges} from "@angular/core";

export function TrackChanges<Type>(key: string,
                                   methodName: string,
                                   strategy: ChangesStrategy = ChangesStrategy.Each): Function {

    // @ts-ignore
    // targetClass - contain entire class from where called decorator
    // functionName - to which function applied decorator Ex: ngOnChanges
    // descriptor - descriptor of function  to which applied decorator Ex: {}.value: ngOnChanges(changes)
    return function (targetClass, functionName: string, descriptor): Function {
        const source = descriptor.value
        descriptor.value = function (changes: SimpleChanges): Function {
            if (changes && changes[key] && changes[key].currentValue !== undefined) {
                const isFirstChange = changes[key].firstChange
                if (strategy === ChangesStrategy.Each ||
                    (strategy === ChangesStrategy.First && isFirstChange) ||
                    (strategy === ChangesStrategy.NonFirst && !isFirstChange)) {
                    targetClass[methodName].call(this, changes[key].currentValue as Type)
                }
            }
            return source.call(this, changes)
        }
        return descriptor
    }

}

export enum ChangesStrategy {
    First,
    Each,
    NonFirst
}
