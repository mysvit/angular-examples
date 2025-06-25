import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CounterService } from './counter.service'
import { CounterChildInclComponent } from './child-incl.component'
import { HostInclDirective } from './host-incl.directive'
import { ServiceLocation } from '../service-location'
import { CounterLabelComponent } from './counter-label.component'
import { CounterChildNotComponent } from './child-not.component'
import { HostNotDirective } from './host-not.directive'

@Component({
    selector: 'app-counter-parent-incl',
    imports: [CommonModule, CounterChildInclComponent, HostInclDirective, CounterLabelComponent, CounterChildNotComponent, HostNotDirective],
    template: `
        <div class="parent-box">
            <h2>(Parent) CounterService declared in providers</h2>
            <button (click)="normalCounter.increment()">Increment Counter</button>
            <hr>

            <p><b>Normal injection</b></p>
            <app-counter-label [instanceId]="normalCounter.getInstanceId()"
                               [location]="normalCounter.getLocation()"
                               [count]="normalCounter.getCount()">
            </app-counter-label>
            <hr>

            <div class="child">
                <app-counter-child-incl label="(Child) CounterService declared in providers"></app-counter-child-incl>
                <app-counter-child-not label="(Child) CounterService NOT declared in providers"></app-counter-child-not>
                <app-counter-child-incl label="(Child) CounterService declared in providers <br> + Directive with declared service (Host)"
                                        appHostIncl>
                    <div #log></div>
                </app-counter-child-incl>
                <app-counter-child-incl label="(Child) CounterService NOT declared in providers <br> + Directive with declared service (Host)">
                    <div appHostIncl></div>
                </app-counter-child-incl>
                <app-counter-child-incl label="(Child) CounterService declared in providers <br> + Directive with declared service (Host)"
                                        appHostNot="NOT">
                    <div #log></div>
                </app-counter-child-incl>
                <app-counter-child-incl label="(Child) CounterService NOT declared in providers <br> + Directive with declared service (Host)">
                    <div appHostNot="NOT"></div>
                </app-counter-child-incl>
            </div>
        </div>
    `,
    styleUrl: './parent.component.scss',
    providers: [
        // two-way to declare
        // {provide: LOCATION, useValue: 'parent'}, CounterService
        {provide: CounterService, useFactory: () => new CounterService(ServiceLocation.parent)}
    ]
})
export class CounterParentInclComponent {

    normalCounter = inject(CounterService)

}
