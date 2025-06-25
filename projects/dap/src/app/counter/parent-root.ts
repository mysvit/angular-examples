import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CounterParentInclComponent } from "./parent-incl.component";
import { CounterParentNotComponent } from './parent-not.component'

@Component({
    selector: 'app-counter-parent-root',
    imports: [CommonModule, CounterParentInclComponent, CounterParentNotComponent],
    template: `
        <app-counter-parent-incl></app-counter-parent-incl>
        <app-counter-parent-not></app-counter-parent-not>
    `
})
export class CounterParentRootComponent {
}
