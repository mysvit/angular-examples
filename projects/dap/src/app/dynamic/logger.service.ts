import { InjectionToken, Injectable } from '@angular/core';

export interface Logger {
    log(message: string): void;
}

export const LOGGER_TOKEN = new InjectionToken<Logger>('Application Logger');

@Injectable() // This could be provided elsewhere if needed
export class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(`[ConsoleLog] ${message}`);
    }
}

@Injectable()
export class ApiLogger implements Logger {
    private readonly instanceId: string

    constructor() {
        this.instanceId = Math.random().toString(36).substring(2, 9)
        console.warn(`CounterService instance created (ID: ${this.instanceId})`)
    }

    // In a real app, this would send logs to an API endpoint
    log(message: string): void {
        console.warn(`[ApiLog] Sending to API: ${message}`, this.instanceId);
    }
}

export const LOGGER_TOKEN_TREE = new InjectionToken<ApiLogger>('TREE', {
    providedIn: 'any', // Makes the token available at the root injector level

    // The factory function that provides the value for this token.
    // This factory will only be included in the bundle if APP_BANNER_MESSAGE is actually injected somewhere.
    factory: () => {
        // const message = isDevMode() ? 'DEVELOPMENT BUILD - For Internal Use Only!' : 'Welcome to My Production App!';
        // console.log(`[APP_BANNER_MESSAGE Factory] Providing: "${message}"`);
        return new ApiLogger()
    }
});
