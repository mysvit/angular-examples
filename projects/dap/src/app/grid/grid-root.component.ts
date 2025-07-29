import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GridColumnComponent } from './grid-column.component'
import { GridComponent } from './grid.component'

@Component({
    selector: 'app-grid-root',
    imports: [CommonModule, GridColumnComponent, GridComponent],
    template: `
        <h1>inject(Service, host: true ) for Parent-Child Communication</h1>

        <p>Each grid below is a separate instance. Columns register with their *immediate* host grid.</p>

        <app-grid gridId="Products">
            <app-grid-column header="ID" columnId="id"></app-grid-column>
            <app-grid-column header="Product Name" columnId="name"></app-grid-column>
            <app-grid-column header="Price" columnId="value"></app-grid-column>
            <!--            <app-grid-column header="Category" columnId="category"></app-grid-column>-->
        </app-grid>
    `
})
export class GridRootComponent {
}
