import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'

@Component({
    selector: 'child-root',
    imports: [
        RouterLink,
        RouterOutlet
    ],
    template: `
        <div>
            <a [routerLink]="'child-list'">LIST</a>
            <a [routerLink]="'child-detail/id-1'">DETAIL param id-1</a>
            <a [routerLink]="'child-detail'" [queryParams]="{q:'id-2'}">DETAIL query id-2</a>
        </div>
        <div class="outlet">
            <router-outlet></router-outlet>
        </div>
    `
})
export class ChildRootComponent {
}