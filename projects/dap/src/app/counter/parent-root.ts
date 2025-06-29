import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CounterParentComponent } from './parent.component'

@Component({
    selector: 'app-counter-parent-root',
    imports: [CommonModule, CounterParentComponent],
    template: `
        <app-counter-parent></app-counter-parent>
    `
})
export class CounterParentRootComponent {
}
