import { Directive } from "@angular/core"
import { CounterService } from "./counter.service"
import { ServiceLocation } from '../service-location'
import { HostBaseDirective } from './host-base.directive'

// Apply this directive to an element
// Provide the CounterService here, so it's available on THOSE element.
@Directive({
    selector: '[appHostIncl]',
    providers: [
        {provide: CounterService, useFactory: () => new CounterService(ServiceLocation.directive)}
    ]
})
export class HostInclDirective extends HostBaseDirective {
}
