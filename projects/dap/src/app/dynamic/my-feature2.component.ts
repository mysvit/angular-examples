import { Component, inject, OnInit } from '@angular/core'
import { LOGGER_TOKEN_TREE }         from './logger.service'

@Component({
    selector: 'app-my-feature2', // Standardized selector
    template: `
        <div style="border: 2px solid orange; padding: 20px; margin: 10px;">
            <h3>My Feature Component 222</h3>
            <p>Check the console to see which logger is active!</p>
            <button (click)="logMessage()">Log a Message</button>
        </div>
    `,
    providers: []
})
export class MyFeature2Component implements OnInit {

    private logger = inject(LOGGER_TOKEN_TREE)


    ngOnInit(): void {
        this.logger.log('MyFeatureComponent initialized 222!')
    }

    logMessage() {
        this.logger.log('Button clicked in MyFeatureComponent 2222!')
    }
}
