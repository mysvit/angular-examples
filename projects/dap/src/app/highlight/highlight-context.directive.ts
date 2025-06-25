import { Directive, inject, Input, OnInit } from '@angular/core'
import { HighlightService } from './highlight.service' // Import the service

@Directive({
    selector: '[appHighlightContext]', // Apply this directive to an element
    // Provide the HighlightService here, so it's available on THIS element.
    providers: [HighlightService]
})
export class HighlightContextDirective implements OnInit {
    // Inject the service that *this directive* is providing
    private highlightService = inject(HighlightService)

    @Input('appHighlightContext') contextColor: string = ''

    constructor() {
        console.log(`[HighlightContextDirective] Initialized. Providing HighlightService.`)
    }

    ngOnInit(): void {
        if (this.contextColor) {
            this.highlightService.setHighlightColor(this.contextColor)
        }
    }
}
