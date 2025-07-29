import {Component, effect, inject, input} from '@angular/core'
import {CommonModule} from '@angular/common'
import {gridToken} from './grid.component'

@Component({
    selector: 'app-grid-column',
    imports: [CommonModule],
    template: `
        <th class="grid-column" [style.background-color]="hasGrid ? '#a3d9ff' : '#f8d7da'">
            {{ header() }}
            @if (!hasGrid) {
                <p class="warning">(No GridContext)</p>
            }
        </th>
    `,
    styles: [`
        :host {
            flex: 1;
            display: flex;
        }

        .grid-column {
            flex: 1;
            padding: 10px;
            border: 1px solid #ddd;
            text-align: left;
        }

        .warning {
            font-size: 0.7em;
            color: red;
            margin: 0;
        }
    `]
})
export class GridColumnComponent {

    header = input('')
    columnId = input('col')

    // THE KEY: Inject GridComponent from the HOST element.
    // This will find the GridComponent instance that directly contains this column in the template.
    // {optional: true} is vital here for when the column is placed outside a GridComponent.
    private gridContext = inject(gridToken, {host: true, optional: true})
    private gridContextSelf = inject(gridToken, {self: true, optional: true})

    hasGrid: boolean = false

    constructor() {
        effect(() => {
            if (this.gridContext) {
                this.hasGrid = true
                this.gridContext.registerColumn(this.columnId())
                console.log(`[GridColumnComponent - ${this.header()}] GridContext injected from host.`)
            } else {
                console.warn(`[GridColumnComponent - ${this.header()}] GridContext NOT found via host injection.`)
            }
            console.log(`[gridContextSelf will be NULL- ${this.gridContextSelf}]`)
        })
    }

}
