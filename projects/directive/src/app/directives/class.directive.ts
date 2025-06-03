import {Directive, effect, ElementRef, input, Renderer2} from '@angular/core';

@Directive({
    selector: '[myClass]'
})
export class ClassDirective {

    readonly myClass = input<string>('')

    constructor(
        private elRef: ElementRef,
        private renderer: Renderer2
    ) {
        effect(() => {
            this.renderer.addClass(this.elRef.nativeElement, this.myClass())
            console.log(`effect myClass ${this.myClass()}`)
        })
    }

}
