import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appHighlight]',
    standalone: false
})
export class HighlightDirective {

    constructor() {
    }

    @Input() defaultColor = ''

    @Input('appHighlight') highlightColor = ''

    @HostBinding('style.backgroundColor')
    private color = 'auto';

    @HostListener('mouseenter') onMouseEnter() {
        this.color = this.highlightColor || this.defaultColor || 'red'
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.color = ''
    }

}
