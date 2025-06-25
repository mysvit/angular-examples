import {Directive, effect, HostBinding, HostListener, input} from '@angular/core';

@Directive({
    selector: '[appHighlightHost]'
})
export class HighlightHostDirective {

    readonly defaultColor = input<string>('')
    readonly appHighlightHost = input<string>('')

    @HostBinding('style.backgroundColor')
    private backgroundColor = 'auto'

    @HostListener('mouseenter') onMouseEnter() {
        this.backgroundColor = this.appHighlightHost() || this.defaultColor() || 'red'
        console.log(`mouseenter highlightColor ${this.appHighlightHost()} defaultColor ${this.defaultColor()}`)
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
