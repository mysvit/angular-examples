import {Component, inject} from '@angular/core'
import {SingletonService} from './singleton/singleton.service'
import {RouterLink, RouterOutlet} from '@angular/router'

@Component({
    selector: 'app-root',
    imports: [
        RouterLink,
        RouterOutlet
    ],
    template: `
        <h1>Design patterns & architecture</h1>

        <a [routerLink]="['/']">
            ROOT
        </a>

        <a [routerLink]="['/singleton']">
            Singleton
        </a>

        <a [routerLink]="['/counter']">
            Counter
        </a>

        <a [routerLink]="['/grid']">
            Grid
        </a>

        <a [routerLink]="['/input']">
            Input
        </a>

        <a [routerLink]="['/theme']">
            Theme
        </a>

        <a [routerLink]="['/panel']">
            Panel
        </a>

        <a [routerLink]="['/form']">
            Form
        </a>

        <router-outlet/>`
})
export class App {

    singleton: SingletonService = inject(SingletonService)
    // counter: CounterService = inject(CounterService)

}
