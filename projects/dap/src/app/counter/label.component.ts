import {Component, input} from '@angular/core'

@Component({
    selector: 'app-label',
    template: `
        <b>{{ msg() }}</b>
        @if (errorLabel()) {
            <p [style.color]="'red'">{{ errorLabel() }}</p>
        } @else if (instanceId()) {
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
export class LabelComponent {

    readonly instanceId = input<string>()
    readonly location = input<string>()
    readonly count = input<number>()
    readonly errorLabel = input<any>()
    readonly msg = input<string>()

}
