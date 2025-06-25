import { Injectable, signal } from '@angular/core'

@Injectable({
    providedIn: 'root' // This service is available globally by default
})
export class LoggerService {

    logPrefix = signal('')
    logCount = signal(0)

    constructor() {
        this.logPrefix.set(`Global Logger (${this.generateRandomId()})`)
        console.log(`[LoggerService] ${this.logPrefix()}: Global instance created.`)
    }

    setPrefix(prefix: string) {
        this.logPrefix.set(prefix)
        console.log(`[LoggerService] Prefix set to: ${this.logPrefix()}`)
    }

    log(message: string): void {
        this.logCount.update(v => v + 1)
        console.log(`[LoggerService - ${this.logPrefix()}]: [${this.logCount()}] ${message}`)
    }

    private generateRandomId(): string {
        return Math.random().toString(36).substring(2, 7)
    }

}
