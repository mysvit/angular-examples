import {Component} from '@angular/core';
import {LogFormatter} from '../../logger.service'

@Component({
    selector: 'app-injected', templateUrl: './injected.component.html', styleUrls: ['./injected.component.scss']
})
export class InjectedComponent {

    injectedText: string = 'Injected Text'
    logs: string[] = [];

    constructor() {
    }

    ngOnChanges() {
        this.logs.push(LogFormatter.log('OnChanges'))
    }

    ngOnInit() {
        this.logs.push(LogFormatter.log('OnInit'))
    }

    ngDoCheck() {
        this.logs.push(LogFormatter.log('DoCheck'))
    }

    ngAfterContentInit() {
        this.logs.push(LogFormatter.log('AfterContentInit'))
    }

    ngAfterContentChecked() {
        this.logs.push(LogFormatter.log('AfterContentChecked'))
    }

    ngAfterViewInit() {
        this.logs.push(LogFormatter.log('AfterViewInit'))
    }

    ngAfterViewChecked() {
        this.logs.push(LogFormatter.log('AfterViewChecked'))
    }

    callChangeClick() {
        setTimeout(() => {
            // this.internal += '*'
            this.injectedText += '*'
        }, 1000)
    }

    //
    // ngAfterContentChecked() {
    //     console.log('AfterContentChecked => InjectedComponent')
    //     // this.logger.log('AfterContentChecked => InjectedComponent')
    //     // this.logger.log('ngAfterContentChecked triggered')
    //     // contentChild is updated after the content has been checked
    //     // if (this.prevText === this.injectedComponent.cText) {
    //     //     this.logIt('AfterContentChecked (no change)')
    //     // } else {
    //     //     this.prevText = this.injectedComponent.cText
    //     //     setTimeout(() => {
    //     //         this.logIt('AfterContentChecked')
    //     //     }, 0)
    //     //     this.doSomething()
    //     // }
    // }
}
