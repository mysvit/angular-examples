import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PanelComponent } from './panel.component'
import { ItemComponent } from './item.component' // Also for standalone item

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, PanelComponent, ItemComponent],
    template: `
        <h1>inject(Service, host: true ) - Exclusive Parent Instance Binding</h1>

        <div class="panels-container">
            <app-panel panelId="A"></app-panel>
            <app-panel panelId="B"></app-panel>
        </div>

        <hr>
        <h3>Standalone Item (outside any panel):</h3>
        <app-item itemNumber="Standalone"></app-item>
        <p>This item will NOT find a LoggerService via host: true because its direct host (app-root) doesn't provide it.
            It will fall back to the global logger.</p>
    `,
    styles: [`
        .panels-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
        }
    `]
})
export class PanelRootComponent {
}
