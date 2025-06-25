import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GridColumnComponent } from './grid-column.component'
import { GridComponent } from './grid.component'

@Component({
    selector: 'app-root',
    imports: [CommonModule, GridColumnComponent, GridComponent],
    template: `
        <h1>inject(Service, host: true ) for Parent-Child Communication</h1>

        <p>Each grid below is a separate instance. Columns register with their *immediate* host grid.</p>

        <div class="container">
            <app-grid gridId="Products">
                <app-grid-column header="Product Name" columnId="prod-name"></app-grid-column>
                <app-grid-column header="Price" columnId="price"></app-grid-column>
                <app-grid-column header="Category" columnId="category"></app-grid-column>
            </app-grid>

            <app-grid gridId="Users">
                <app-grid-column header="User ID" columnId="user-id"></app-grid-column>
                <app-grid-column header="Email" columnId="user-email"></app-grid-column>
            </app-grid>

            <app-grid-column header="Standalone Column" columnId="standalone-col"></app-grid-column>
            <p>Notice this column's background color and console message, as it doesn't find a GridComponent via
                'host: true'.</p>
        </div>
    `,
    styles: [`
        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
        }
    `]
})
export class GridRootComponent {
}
