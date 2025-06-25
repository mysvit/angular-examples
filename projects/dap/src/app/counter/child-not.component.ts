import { Component } from '@angular/core'
import { CounterChildBaseComponent } from './child-base.component'
import { CounterLabelComponent } from './counter-label.component'

@Component({
    selector: 'app-counter-child-not',
    imports: [
        CounterLabelComponent
    ],
    templateUrl: './child-base.component.html',
    styleUrls: ['./child-base.component.scss'],
    providers: []
})
export class CounterChildNotComponent extends CounterChildBaseComponent {
}
