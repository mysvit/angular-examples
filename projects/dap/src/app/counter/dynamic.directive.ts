import { Directive, ElementRef, inject, input, ViewContainerRef } from '@angular/core'

@Directive({
    selector: '[appDynamicContent]'
})
export class DynamicContentDirective {

    readonly appDynamicContent = input('appDynamicContent')
    readonly viewContainerRef = inject(ViewContainerRef)

}
