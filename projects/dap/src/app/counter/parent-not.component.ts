import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CounterService } from './counter.service'
import { CounterChildInclComponent } from './child-incl.component'
import { CounterChildNotComponent } from './child-not.component'
import { CounterLabelComponent } from './counter-label.component'
import { HostNotDirective } from './host-not.directive'

@Component({
    selector: 'app-counter-parent-not',
    imports: [CommonModule, CounterChildInclComponent, CounterChildNotComponent, CounterLabelComponent, HostNotDirective],
    template: `
        <div class="parent-box">
            <h2>(Parent) CounterService NOT declared in providers</h2>
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
                <app-counter-child-incl label="(Child) CounterService declared in providers <br> + Directive NOT declared service (Host)"
                                        appHostNot></app-counter-child-incl>
                <app-counter-child-not label="(Child) CounterService NOT declared in providers <br> + Directive NOT declared service (Host)"
                                       appHostNot="NOT"></app-counter-child-not>
            </div>
        </div>
    `,
    styleUrl: './parent.component.scss',
})
export class CounterParentNotComponent {

    normalCounter = inject(CounterService)

}
