import {Directive, effect, HostBinding, HostListener, input} from '@angular/core';

@Directive({
    selector: '[myHighlightColor]'
})
export class HighlightDirective {

    readonly defaultColor = input<string>('')
    readonly myHighlightColor = input<string>('')

    @HostBinding('style.backgroundColor')
    private backgroundColor = 'auto'

    @HostListener('mouseenter') onMouseEnter() {
        this.backgroundColor = this.myHighlightColor() || this.defaultColor() || 'red'
        console.log(`mouseenter highlightColor ${this.myHighlightColor()} defaultColor ${this.defaultColor()}`)
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.backgroundColor = this.defaultColor()
    }

    constructor() {
        effect(() => {
            this.backgroundColor = this.defaultColor()
            console.log(`effect defaultColor ${this.defaultColor()}`)
        })
    }

}
