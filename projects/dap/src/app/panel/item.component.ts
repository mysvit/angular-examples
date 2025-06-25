import { Component, OnInit, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './logger.service'; // Import the service

@Component({
    selector: 'app-item',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div
            class="item-card"
            [style.border-color]="injectedLogger?.logCount() !== undefined ? 'green' : 'red'"
            (click)="onClick()"
        >
            <h4>Item {{ itemNumber }}</h4>
            @if (injectedLogger) {
                <p>Logger Prefix: {{ injectedLogger.logPrefix() }}</p>
                <p>Logs Count: {{ injectedLogger.logCount() }}</p>
                <p class="status">(Injected via Host)</p>
            } @else {
                <p class="warning">No Host-Provided Logger.</p>
                <p class="status">(Using global/normal logger)</p>
                <p>Global Logger Count: {{ globalLogger.logCount() }}</p>
            }
        </div>
    `,
    styles: [`
    .item-card {
      border: 2px solid;
      padding: 10px;
      border-radius: 8px;
      background-color: #f0f0f0;
      cursor: pointer;
      width: 120px;
      text-align: center;
    }
    .item-card:hover {
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }
    .warning { color: red; font-weight: bold; font-size: 0.9em;}
    .status { font-size: 0.7em; font-style: italic; color: #555; }
  `]
})
export class ItemComponent implements OnInit {
    @Input() itemNumber: string = 'N/A';

    // THE KEY DIFFERENCE: This will look for a LoggerService provided by its
    // immediate parent component *only*. If the parent doesn't provide it, it's null.
    // It will NOT fall back to the `providedIn: 'root'` instance.
    injectedLogger = inject(LoggerService, { host: true, optional: true });

    // This will always get the LoggerService instance that's first found
    // by traversing up the entire injector tree, including the 'providedIn: root' one.
    globalLogger = inject(LoggerService); // Normal injection

    constructor() {
        console.log(`[ItemComponent - ${this.itemNumber}] Initializing...`);
        if (this.injectedLogger) {
            console.log(`[ItemComponent - ${this.itemNumber}] Logger via {host: true} found! Prefix: ${this.injectedLogger.logPrefix()}`);
        } else {
            console.warn(`[ItemComponent - ${this.itemNumber}] Logger via {host: true} NOT found. Will use global/normal logger.`);
        }
        console.log(`[ItemComponent - ${this.itemNumber}] Logger via normal inject: ${this.globalLogger.logPrefix()}`);
    }

    ngOnInit(): void {
        // Determine which logger to use for its own logs
        const loggerToUse = this.injectedLogger || this.globalLogger;
        loggerToUse.log(`Item ${this.itemNumber} initialized.`);
    }

    onClick(): void {
        const loggerToUse = this.injectedLogger || this.globalLogger;
        loggerToUse.log(`Item ${this.itemNumber} clicked.`);
    }
}
