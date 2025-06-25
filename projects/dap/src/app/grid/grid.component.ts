import { Component, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

interface GridItem {
    id: number;
    name: string;
    value: number;
    category: string;
}

@Component({
    selector: 'app-grid',
    standalone: true,
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
<!--                    @for (item of gridData; track item.id) {-->
<!--                        <tr>-->
<!--                            <td>{{ item.id }}</td>-->
<!--                            <td>{{ item.name }}</td>-->
<!--                            <td>{{ item.value | currency:'USD':'symbol':'1.2-2' }}</td>-->
<!--                            <td>{{ item.category }}</td>-->
<!--                        </tr>-->
<!--                    }-->
<!--                    @if (gridData.length === 0) {-->
<!--                        <tr><td [attr.colspan]="defaultColumns.length + registeredColumns.length">No data available.</td></tr>-->
<!--                    }-->
                    <tr><td [attr.colspan]="registeredColumns.length">... Grid Content ...</td></tr>
                </tbody>
            </table>
            <ng-content></ng-content>
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
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }

        th, td {
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
        {provide: GridComponent, useExisting: GridComponent}
    ]
})
export class GridComponent implements OnInit {

    @Input() gridId: string = 'Default Grid'
    registeredColumns: string[] = []
    gridData: GridItem[] = [];
    defaultColumns = [
        { field: 'id', header: 'ID' },
        { field: 'name', header: 'Item Name' },
        { field: 'value', header: 'Price' },
        { field: 'category', header: 'Category' }
    ];

    constructor() {
        console.log(`[GridComponent] Instance created: ${this.gridId}`)
    }

    ngOnInit(): void {
        this.gridData = [
            { id: 1, name: 'Laptop', value: 1200, category: 'Electronics' },
            { id: 2, name: 'Mouse', value: 25, category: 'Electronics' },
            { id: 3, name: 'Keyboard', value: 75, category: 'Electronics' }
        ];
    }

    // Method for child columns to register themselves
    registerColumn(columnId: string) {
        this.registeredColumns.push(columnId)
        console.log(`[GridComponent - ${this.gridId}] Registered column: ${columnId}. Total: ${this.registeredColumns.length}`)
    }

}
