import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
    selector: '[appHighlightRef]'
})
export class HighlightRefDirective {

    readonly appHighlightRef = input<string>()

    private element = inject(ElementRef)

    constructor() {
        effect(() => {
            this.element.nativeElement.style.color = this.appHighlightRef() || 'red'
        })
    }

}
