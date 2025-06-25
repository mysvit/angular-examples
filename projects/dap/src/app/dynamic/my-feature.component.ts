import { Component, inject, OnInit } from '@angular/core'
import { ApiLogger, LOGGER_TOKEN_TREE } from './logger.service'

@Component({
    selector: 'app-my-feature', // Standardized selector
    template: `
        <div style="border: 2px solid orange; padding: 20px; margin: 10px;">
            <h3>My Feature Component</h3>
            <p>Check the console to see which logger is active!</p>
            <button (click)="logMessage()">Log a Message</button>
        </div>
    `,
    providers: [
        // This is the "dynamic" provider part!
        // The useFactory decides which Logger implementation to provide
        // based on the AppConfigService.
        // {
        //     provide: LOGGER_TOKEN,
        //     useFactory: (config: AppConfigService) => {
        //         // This factory is run once when the component is created.
        //         // It reads the configuration from AppConfigService at that time.
        //         if (config.shouldUseApiLogger()) {
        //             return new ApiLogger()
        //         } else {
        //             return new ConsoleLogger()
        //         }
        //     },
        //     deps: [AppConfigService] // Declare the dependencies for the factory function
        // }
    ]
})
export class MyFeatureComponent implements OnInit {
    // Inject the Logger using the token
    private logger_root = inject(ApiLogger)
    private logger = inject(LOGGER_TOKEN_TREE)


    ngOnInit(): void {
        this.logger.log('MyFeatureComponent initialized!')
    }

    logMessage() {
        this.logger.log('Button clicked in MyFeatureComponent!')
    }
}

