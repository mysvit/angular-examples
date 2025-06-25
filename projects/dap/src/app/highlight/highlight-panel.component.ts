import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HighlightItemComponent } from './highlight-item.component'
import { HighlightContextDirective } from './highlight-context.directive' // Import the new directive

@Component({
    selector: 'app-highlight-panel',
    standalone: true,
    imports: [CommonModule, HighlightItemComponent, HighlightContextDirective], // Import the directive
    template: `
        <div class="highlight-panel">
            <h3>{{ title }}</h3>
            <p>This panel implicitly defines highlight colors via directive.</p>
            <hr>
            <div class="items-container">
                <app-highlight-item [itemNumber]="1" [appHighlightContext]="getRandomColor()"></app-highlight-item>
                <app-highlight-item [itemNumber]="2" [appHighlightContext]="getRandomColor()"></app-highlight-item>
            </div>
        </div>
    `,
    styles: [`
        .highlight-panel {
            border: 3px solid #ccc; /* Panel border is now static */
            padding: 20px;
            margin: 20px;
            border-radius: 10px;
            background-color: #f8f9fa;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .items-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
    `]
    // NOTE: HighlightPanelComponent no longer directly provides HighlightService.
    // It's the HighlightContextDirective that provides it.
})
export class HighlightPanelComponent {
    @Input() title: string = 'Highlight Panel'

    constructor() {
        console.log(`[HighlightPanelComponent] Initialized.`)
    }

    // Helper to generate random colors for the directive
    getRandomColor(): string {
        const letters = '0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color
    }
}
