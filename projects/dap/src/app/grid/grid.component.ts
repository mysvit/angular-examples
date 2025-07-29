import {Component, InjectionToken, Input} from '@angular/core'
import {CommonModule} from '@angular/common'

interface GridItem {
    [key: string]: number | string;
}

export const gridToken = new InjectionToken<GridComponent>('GRID_TOKEN')

@Component({
    selector: 'app-grid',
    imports: [CommonModule],
    template: `
        <div class="grid-container">
            <h3>Grid: {{ gridId }}</h3>
            <p>Columns Registered: {{ registeredColumns.length }}</p>
            <table>
                <thead>
                <tr>
                    <ng-content select="app-grid-column[header]"></ng-content>
                </tr>
                </thead>
                <tbody>
                    @for (item of gridData; track item['id']) {
                        <tr>
                            @for (col of registeredColumns; track col) {
                                <td>{{ item[col] }}</td>
                            }
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    `,
    styles: [`
        .grid-container {
            border: 2px solid #3498db; /* Blue */
            padding: 15px;
            margin: 20px;
            border-radius: 8px;
            background-color: #ecf0f1; /* Light gray */
        }

        table {
            border-collapse: collapse;
            margin-top: 10px;
            width: 700px
        }

        tr {
            display: flex;
        }

        th, td {
            flex: 1;
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #3498db;
            color: white;
        }
    `],
    providers: [
        // This makes the current instance of GridComponent available for injection
        // using its own type as the token.
        {provide: gridToken, useExisting: GridComponent}
    ]
})
export class GridComponent {

    @Input() gridId: string = 'Default Grid'
    registeredColumns: string[] = []
    gridData: GridItem[] = [
        <GridItem>{id: 1, name: 'Laptop', value: 1200, category: 'Electronics'},
        <GridItem>{id: 2, name: 'Mouse', value: 25, category: 'Electronics'},
        <GridItem>{id: 3, name: 'Keyboard', value: 75, category: 'Electronics'}
    ]

    constructor() {
        console.log(`[GridComponent] Instance created: ${this.gridId}`)
    }

    // Method for child columns to register themselves
    registerColumn(columnId: string) {
        this.registeredColumns.push(columnId)
        console.log(`[GridComponent - ${this.gridId}] Registered column: ${columnId}. Total: ${this.registeredColumns.length}`)
    }

}
