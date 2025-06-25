import { Directive } from "@angular/core"
import { HostBaseDirective } from './host-base.directive'

@Directive({
    selector: '[appHostNot]',
})
export class HostNotDirective extends HostBaseDirective {
}
