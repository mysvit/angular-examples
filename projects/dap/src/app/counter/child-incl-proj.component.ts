import { Component } from '@angular/core'
import { CounterService } from './counter.service'
import { CounterChildBaseComponent } from './child-base.component'
import { ServiceLocation } from '../service-location'
import { LabelComponent } from './label.component'
import { DynamicContentDirective } from './dynamic.directive'
import { DynamicService } from './dynamic.service'

@Component({
    selector: 'app-counter-child-incl-proj',
    imports: [
        LabelComponent,
        DynamicContentDirective
    ],
    templateUrl: './child-base.component.html',
    styleUrls: ['./child-base.component.scss'],
    providers: [
        DynamicService,
        {provide: CounterService, useFactory: () => new CounterService(ServiceLocation.projection)}
    ],
})
export class CounterChildInclProjComponent extends CounterChildBaseComponent {
}
