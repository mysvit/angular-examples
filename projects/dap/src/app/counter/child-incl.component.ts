import { ChangeDetectionStrategy, Component } from '@angular/core'
import { COUNTER_CHILD_FACTORY, CounterService } from './counter.service'
import { CounterChildBaseComponent } from './child-base.component'
import { LabelComponent } from './label.component'
import { DynamicContentDirective } from './dynamic.directive'
import { DynamicService } from './dynamic.service'

@Component({
    selector: 'app-counter-child-incl',
    imports: [
        LabelComponent,
        DynamicContentDirective
    ],
    templateUrl: './child-base.component.html',
    styleUrls: ['./child-base.component.scss'],
    providers: [
        DynamicService,
        // {provide: CounterService, useFactory: () => new CounterService(ServiceLocation.child)}
        {provide: CounterService, useFactory: COUNTER_CHILD_FACTORY}
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterChildInclComponent extends CounterChildBaseComponent {
}
