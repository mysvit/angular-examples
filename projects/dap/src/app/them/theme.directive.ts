import { Directive, effect, inject, input } from '@angular/core'
import { ThemeService } from './theme.service' // Import the service

@Directive({
    selector: '[appTheme]',
    providers: [ThemeService]
})
export class ThemeDirective {
    // Inject the ThemeService instance *this directive* is providing
    private themeService = inject(ThemeService)

    appTheme = input('')

    constructor() {
        console.log(`[ThemeDirective] Initialized. Providing its own ThemeService.`)
        effect(() => {
            // if (this.appTheme()) {
            console.log('[ThemeDirective] setTheme', this.appTheme())
            this.themeService.setTheme(this.appTheme())
            // }
        })
    }

}
