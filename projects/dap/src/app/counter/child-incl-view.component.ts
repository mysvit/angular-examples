import { Component } from '@angular/core'
import { COUNTER_CHILD_FACTORY, CounterService } from './counter.service'
import { CounterChildBaseComponent } from './child-base.component'
import { LabelComponent } from './label.component'
import { DynamicContentDirective } from './dynamic.directive'
import { DynamicService } from './dynamic.service'

@Component({
    selector: 'app-counter-child-incl-view',
    imports: [
        LabelComponent,
        DynamicContentDirective
    ],
    templateUrl: './child-base.component.html',
    styleUrls: ['./child-base.component.scss'],
    viewProviders: [
        DynamicService,
        {provide: CounterService, useFactory: COUNTER_CHILD_FACTORY}
    ]
})
export class CounterChildInclViewComponent extends CounterChildBaseComponent {
}
