import { Component } from '@angular/core'
import { CounterChildBaseComponent } from './child-base.component'
import { LabelComponent } from './label.component'
import { DynamicContentDirective } from './dynamic.directive'
import { DynamicService } from './dynamic.service'

@Component({
    selector: 'app-counter-child-not',
    imports: [
        LabelComponent,
        DynamicContentDirective
    ],
    templateUrl: './child-base.component.html',
    styleUrls: ['./child-base.component.scss'],
    providers: [DynamicService]
})
export class CounterChildNotComponent extends CounterChildBaseComponent {
}
