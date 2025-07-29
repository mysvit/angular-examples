// src/app/highlight.service.ts
import { Injectable } from '@angular/core';

@Injectable() // No providedIn: 'root'
export class HighlightService {

    private highlightColor: string;
    private interactionCount = 0;

    constructor() {
        this.highlightColor = this.getRandomColor();
        console.log(`[HighlightService] New instance created with color: ${this.highlightColor}`);
    }

    setHighlightColor(color: string): void { this.highlightColor = color; }
    getHighlightColor(): string { return this.highlightColor; }
    recordInteraction(): void {
        this.interactionCount++;
        console.log(`[HighlightService - ${this.highlightColor}] Interaction recorded. Total: ${this.interactionCount}`);
    }
    getInteractionCount(): number { return this.interactionCount; }

    private getRandomColor(): string {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

}
