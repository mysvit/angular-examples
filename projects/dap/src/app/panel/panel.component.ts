import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './logger.service'; // Import the service
import { ItemComponent } from './item.component'; // For template usage

@Component({
    selector: 'app-panel',
    standalone: true,
    imports: [CommonModule, ItemComponent],
    template: `
        <div class="panel-container" [style.border-color]="panelColor">
            <h3>Panel: {{ panelId }}</h3>
            <p>Panel's Logger (Prefix: {{ panelLogger.logPrefix() }}): Logs: {{ panelLogger.logCount() }}</p>
            <hr>
            <div class="items-wrapper">
                <app-item itemNumber="1"></app-item>
                <app-item itemNumber="2"></app-item>
            </div>
        </div>
    `,
    styles: [`
    .panel-container {
      border: 2px solid;
      padding: 20px;
      margin: 20px;
      border-radius: 10px;
      background-color: #f8f9fa;
    }
    .items-wrapper {
      display: flex;
      gap: 10px;
      justify-content: center;
      flex-wrap: wrap;
    }
  `],
    // KEY: Provide a NEW instance of LoggerService for THIS panel
    providers: [LoggerService]
})
export class PanelComponent implements OnInit {
    @Input() panelId: string = 'Default';
    panelColor: string;

    // The panel component injects its OWN provided LoggerService instance
    panelLogger = inject(LoggerService);

    constructor() {
        this.panelColor = this.getRandomColor();
        this.panelLogger.setPrefix(`Panel ${this.panelId} (${this.panelColor})`);
        console.log(`[PanelComponent - ${this.panelId}] Initialized. Providing its own LoggerService.`);
    }

    ngOnInit(): void {
        this.panelLogger.log('Panel initialized event.');
    }

    private getRandomColor(): string {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

}
