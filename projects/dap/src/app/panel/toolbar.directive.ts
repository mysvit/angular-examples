import { Directive, inject } from '@angular/core'
import { ItemComponent } from './item.component'

@Directive({
    selector: '[appToolbar]'
})
export class ToolbarDirective {

    private itemComponent = inject(ItemComponent, {host: true, optional: true})

    constructor() {
        console.log(`[ToolbarDirective] Initialized. Inject ItemComponent by @Host=`, this.itemComponent)
    }

}
