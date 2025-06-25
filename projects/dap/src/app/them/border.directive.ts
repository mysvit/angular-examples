import { Directive, effect, inject, input } from '@angular/core'
import { ThemeService } from './theme.service'
import { StylableComponent } from './stylable.component'
import { ThemeDirective } from './theme.directive' // Import the service

@Directive({
    selector: '[appBorder]'
})
export class BorderDirective {

    private themeService = inject(ThemeService, {self: true, optional: true})
    private stylableComponent = inject(StylableComponent, {self: true, optional: true})
    private themeDirective = inject(ThemeDirective, {optional: true})

    appBorder = input('')

    constructor() {
        console.log('[BorderDirective] Initialized. ',
            'Inject ThemeService by @Host=', this.themeService,
            'stylableComponent', this.stylableComponent, 'themeDirective', this.themeDirective)
        effect(() => {
            // if (this.appTheme()) {
            console.log('[BorderDirective] setBorder', this.appBorder())
            this.themeService?.setBorder(this.appBorder())
            // }
        })
    }

}
