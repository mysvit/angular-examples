import {Component} from '@angular/core';
import {LoggerService} from '../../logger.service'

@Component({
    selector: 'app-injected',
    templateUrl: './injected.component.html',
    styleUrls: ['./injected.component.scss']
})
export class InjectedComponent {

    cText: string = 'Text from Injected component'
    internal: string = '';

    constructor(private logger: LoggerService) {
    }

    callChangeClick() {
        setTimeout(() => {
            // this.internal += '*'
            this.cText += '*'
        }, 2000)
    }

    ngAfterContentChecked() {
        console.log('AfterContentChecked => InjectedComponent')
        // this.logger.log('AfterContentChecked => InjectedComponent')
        // this.logger.log('ngAfterContentChecked triggered')
        // contentChild is updated after the content has been checked
        // if (this.prevText === this.injectedComponent.cText) {
        //     this.logIt('AfterContentChecked (no change)')
        // } else {
        //     this.prevText = this.injectedComponent.cText
        //     setTimeout(() => {
        //         this.logIt('AfterContentChecked')
        //     }, 0)
        //     this.doSomething()
        // }
    }
}
