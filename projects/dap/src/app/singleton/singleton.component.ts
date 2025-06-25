import {Component, inject} from '@angular/core'
import {SingletonService} from './singleton.service'

@Component({
    selector: 'app-singleton',
    imports: [],
    template: `
        <div class="parent-box">
            <h3>SingletonService provided in ROOT and also in SingletonComponent providers array</h3>
            <p>When we try to inject it, an error occurs:</p>
            <p [style.color]="'red'"><b>singletonFail: {{ singletonError }}</b></p>
        </div>
    `,
    providers: [SingletonService]
})
export class SingletonComponent {

    singletonFail?: SingletonService
    singletonError?: string

    constructor() {
        try {
            this.singletonFail = inject(SingletonService)
        } catch (e: any) {
            this.singletonError = e.message
        }
    }

}
