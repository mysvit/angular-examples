import {Directive, Input} from '@angular/core'

export type T = {};
export type Loaded = { type: 'loaded', data: T };
export type Loading = { type: 'loading' }
export type LoadingState = Loaded | Loading

@Directive({
    selector: '[ifLoaded]',
    standalone: false
})
export class IfLoadedDirective {

    @Input('ifLoaded')
    set state(state: LoadingState) {
        console.log(state.type)
    }

    static ngTemplateGuard_state(dir: IfLoadedDirective, expr: LoadingState): expr is Loaded {
        console.log(dir, expr)
        return true
    }

}

export interface Person {
    name: string
}
