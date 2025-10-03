import { Component } from '@angular/core'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { ChartComponent } from './chart.component'

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink, RouterLinkActive, ChartComponent, ChartComponent, ChartComponent],
    template: `
        <div>
            <a [routerLink]="'/app'" routerLinkActive>APP</a>
            <a [routerLink]="'/child'">CHILD</a>
        </div>
        @defer (on timer(5s)) {
            <app-chart></app-chart>
        } @loading (after 500ms; minimum 1s) {
            <p>Loading chart...</p>
        } @error {
            <p>Could not load ad.</p>
        }

        <div class="outlet">
            <router-outlet></router-outlet>
        </div>
    `
})
export class App {
}
