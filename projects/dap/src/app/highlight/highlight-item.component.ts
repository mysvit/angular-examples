import { Component, inject, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HighlightService } from './highlight.service'

@Component({
    selector: 'app-highlight-item',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div
            class="highlight-item"
            [style.border-color]="borderColor"
            [style.background-color]="backgroundColor"
            (click)="onClick()"
        >
            <h4>Item {{ itemNumber }}</h4>
            @if (highlightService) {
                <p>Managed by Host Service (Color: {{ highlightService.getHighlightColor() }})</p>
                <p>Interactions: {{ highlightService.getInteractionCount() }}</p>
            } @else {
                <p class="warning">No HighlightService found at host level.</p>
            }
        </div>
    `,
    styles: [`
        .highlight-item {
            border: 2px solid;
            padding: 15px;
            margin: 10px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
        }

        .highlight-item:hover {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transform: translateY(-2px);
        }

        .warning {
            color: red;
            font-weight: bold;
        }
    `]
})
export class HighlightItemComponent implements OnInit {
    @Input() itemNumber: number = 0

    // KEY FIX: This now finds HighlightService provided by appHighlightContext directive
    highlightService = inject(HighlightService, {host: true, optional: true})

    borderColor: string = '#ccc'
    backgroundColor: string = '#f0f0f0'

    constructor() {
        if (this.highlightService) {
            console.log(`[HighlightItemComponent - Item ${this.itemNumber}] HighlightService injected from host.`)
        } else {
            console.warn(`[HighlightItemComponent - Item ${this.itemNumber}] HighlightService NOT found via host injection.`)
        }
    }

    ngOnInit(): void {
        if (this.highlightService) {
            this.borderColor = this.highlightService.getHighlightColor()
            this.backgroundColor = this.getLightColor(this.borderColor)
        }
    }

    onClick(): void {
        if (this.highlightService) {
            this.highlightService.recordInteraction()
        }
    }

    private getLightColor(hex: string): string {
        if (!hex) return '#f0f0f0'
        let c = hex.substring(1)
        let rgb = parseInt(c, 16)
        let r = (rgb >> 16) & 0xff
        let g = (rgb >> 8) & 0xff
        let b = (rgb >> 0) & 0xff

        r = Math.floor(r + (255 - r) * 0.7)
        g = Math.floor(g + (255 - g) * 0.7)
        b = Math.floor(b + (255 - b) * 0.7)

        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    }
}
