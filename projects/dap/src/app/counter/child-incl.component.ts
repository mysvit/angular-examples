import { Component } from '@angular/core'
import { COUNTER_CHILD_FACTORY, CounterService } from './counter.service'
import { CounterChildBaseComponent } from './child-base.component'
import { CounterLabelComponent } from './counter-label.component'


@Component({
    selector: 'app-counter-child-incl',
    imports: [
        CounterLabelComponent
    ],
    templateUrl: './child-base.component.html',
    styleUrls: ['./child-base.component.scss'],
    providers: [
        // {provide: CounterService, useFactory: () => new CounterService(ServiceLocation.child)}
        {provide: CounterService, useFactory: COUNTER_CHILD_FACTORY}
    ]
})
export class CounterChildInclComponent extends CounterChildBaseComponent {

    // viewLog = viewChild<ElementRef>('directiveLog')
    // contLog = contentChild<ElementRef>('directiveLog')
    // contentsLog = contentChildren<ElementRef>('')
    //
    // ngOnInit(): void {
    //     console.log('child directiveLog', this.viewLog())
    //     console.log('child directiveLog', this.contLog())
    //     console.log('child directiveLog', this.contentsLog())
    // }

}
