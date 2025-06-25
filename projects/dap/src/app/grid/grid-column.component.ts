import { Component, effect, inject, input, Input, OnDestroy, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GridComponent } from './grid.component' // Import the GridComponent

@Component({
    selector: 'app-grid-column',
    standalone: true,
    imports: [CommonModule],
    template: `
        <th class="grid-column" [style.background-color]="hasGrid ? '#a3d9ff' : '#f8d7da'">
            {{ header }}
            @if (!hasGrid) {
                <p class="warning">(No GridContext)</p>
            }
        </th>
    `,
    styles: [`
        .grid-column {
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
export class GridColumnComponent implements OnInit, OnDestroy {

    @Input() header: string = 'Column'
    columnId = input('col')

    // THE KEY: Inject GridComponent from the HOST element.
    // This will find the GridComponent instance that directly contains this column in the template.
    // {optional: true} is vital here for when the column is placed outside a GridComponent.
    private gridContext = inject(GridComponent, {host: true, optional: true})

    hasGrid: boolean = false

    constructor() {
        if (this.gridContext) {
            this.hasGrid = true
            console.log(`[GridColumnComponent - ${this.header}] GridContext injected from host.`)
        } else {
            console.warn(`[GridColumnComponent - ${this.header}] GridContext NOT found via host injection.`)
        }
        effect(() => {
            if (this.gridContext) {
                this.gridContext.registerColumn(this.columnId())
            }
        })
    }

    ngOnInit(): void {
        // if (this.gridContext) {
        //     this.gridContext.registerColumn(this.columnId)
        // }
    }

    ngOnDestroy(): void {
        // In a real app, you might unregister the column here
    }
}
