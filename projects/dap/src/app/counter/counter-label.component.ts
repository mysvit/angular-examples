import { Component, input } from '@angular/core'

@Component({
    selector: 'app-counter-label',
    template: `
        @if (errorLabel()) {
            <p [style.color]="'red'">{{ errorLabel() }}</p>
        } @else {
            <p [class]="'location-' +location()">
                Injected Service ID:<b>{{ instanceId() }}</b>
                Location:<b>{{ location() }}</b>
                Count:<b>({{ count() }})</b>
            </p>
        }
    `,
    styles: [`
        .location-root {
            color: #4acc02;
        }

        .location-parent {
            color: #ff00ba;
        }

        .location-child {
            color: #0024fb;
        }

        .location-host {
            color: #c79604;
        }
    `]
})
export class CounterLabelComponent {

    instanceId = input<string>()
    location = input<string>()
    count = input<number>()
    errorLabel = input<any>()

    constructor() {
    }

}
