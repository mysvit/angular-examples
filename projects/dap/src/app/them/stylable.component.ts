import { Component, effect, inject, Input, OnInit, signal } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ThemeService } from './theme.service' // Import the service

@Component({
    selector: 'app-stylable',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="stylable-card" [ngClass]="['theme-' + currentTheme(), 'border-' + currentBorder()]">
            <h4>Stylable Component: {{ componentId }}</h4>
            <p>Injected Theme: {{ currentTheme() }}</p>
            <p class="status-message">
                @if (isHostTheme) {
                    (Theme provided by host directive)
                } @else {
                    (Theme provided by global/ancestor)
                }
            </p>
        </div>
    `,
    styles: [`
        .stylable-card {
            border: 2px solid #999;
            padding: 15px;
            margin: 10px;
            border-radius: 8px;
            width: 250px;
            display: inline-block;
            vertical-align: top;
        }

        .status-message {
            font-size: 0.8em;
            font-style: italic;
            color: #666;
        }

        /* Theme styles for demonstration */
        .theme-light {
            background-color: #f8f8f8;
            color: #333;
            //border-color: #ccc;
        }

        .theme-dark {
            background-color: #333;
            color: #f8f8f8;
            border-color: #555;
        }

        .theme-blue {
            background-color: #e0f2f7;
            color: #007bff;
            //border-color: #007bff;
        }

        .theme-green {
            background-color: #e6ffe6;
            color: #28a745;
            border-color: #28a745;
        }

        .theme-purple {
            background-color: #f3e6ff;
            color: #6f42c1;
            border-color: #6f42c1;
        }

        .border-light {
            border-color: #ccc;
        }

        .border-blue {
            border-color: #007bff;
        }
    `]
})
export class StylableComponent implements OnInit {
    @Input() componentId: string = 'Default'

    // **THE KEY DIFFERENCE MAKER**
    // This will *only* get the ThemeService provided by a directive on its host element.
    // It will NOT fall back to 'providedIn: root' if a host directive isn't found.
    // It will just be null.
    private hostThemeService = inject(ThemeService, {host: true, optional: true})

    // This will get the ThemeService using the normal lookup behavior:
    // - Check own providers (none here)
    // - Check parent component providers
    // - Check providedIn: 'root'
    private normalThemeService = inject(ThemeService)

    currentTheme = signal('')
    currentBorder = signal('')
    isHostTheme: boolean = false

    constructor() {
        console.log(`[StylableComponent - ${this.componentId}] Instance created.`)
        if (this.hostThemeService) {
            this.isHostTheme = true
            console.log(`[StylableComponent - ${this.componentId}] ThemeService injected via {host: true}. Theme: ${this.hostThemeService.getTheme()}`)
        } else {
            this.isHostTheme = false
            console.warn(`[StylableComponent - ${this.componentId}] ThemeService NOT found via {host: true}.`)
        }
        console.log(`[StylableComponent - ${this.componentId}] ThemeService injected normally. Theme: ${this.normalThemeService.getTheme()}`)
        effect(() => {
            const theme = this.isHostTheme
                ? this.hostThemeService!.getTheme()
                : this.normalThemeService.getTheme()
            const border = this.isHostTheme
                ? this.hostThemeService!.currentBorder()
                : this.normalThemeService.currentBorder()
            console.log(`[StylableComponent - ${this.componentId}] effect. Theme: ${theme}, border: ${border}`)
            // If a host theme service exists, use it. Otherwise, fall back to the normally injected one.
            this.currentTheme.set(theme)
            this.currentBorder.set(border)
        })
    }

    ngOnInit(): void {
    //     const theme = this.isHostTheme
    //         ? this.hostThemeService!.getTheme()
    //         : this.normalThemeService.getTheme()
    //     console.log(`[StylableComponent - ${this.componentId}] ngOnInit. Theme: ${theme}`)
    //     // If a host theme service exists, use it. Otherwise, fall back to the normally injected one.
    //     this.currentTheme.set(theme)
    }
}
