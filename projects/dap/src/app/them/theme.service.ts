import { Injectable, signal } from '@angular/core'

@Injectable({
    providedIn: 'root' // Global singleton by default
})
export class ThemeService {

    private currentTheme = signal('light')
    getTheme = this.currentTheme.asReadonly()

    currentBorder = signal('light')

    constructor() {
        // this.currentTheme = this.getRandomTheme();
        console.log(`[ThemeService] New instance created. Default/Initial Theme: ${this.currentTheme}`)
    }

    setTheme(theme: string): void {
        this.currentTheme.set(theme)
        // console.log(`[ThemeService] Theme set to: ${this.currentTheme}`);
    }

    setBorder(border: string): void {
        this.currentBorder.set(border)
        // console.log(`[ThemeService] Theme set to: ${this.currentTheme}`);
    }


    private getRandomTheme(): string {
        const themes = ['light', 'dark', 'blue', 'green', 'purple']
        return themes[Math.floor(Math.random() * themes.length)]
    }

}
