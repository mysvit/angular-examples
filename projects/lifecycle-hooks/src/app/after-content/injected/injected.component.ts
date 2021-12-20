import {Component} from '@angular/core';
import {LogFormatter, LoggerService} from '../../logger.service'

@Component({
    selector: 'app-injected', templateUrl: './injected.component.html', styleUrls: ['./injected.component.scss']
})
export class InjectedComponent {

    injectedText: string = 'Injected Text'
    logs: string[] = [];

    constructor(private logger: LoggerService) {
    }

    ngOnChanges() {
        if (!this.logger.showAllEvents) {
            return
        }
        this.logs.push(LogFormatter.log('OnChanges'))
    }

    ngOnInit() {
        if (!this.logger.showAllEvents) {
            return
        }
        this.logs.push(LogFormatter.log('OnInit'))
    }

    ngDoCheck() {
        if (!this.logger.showAllEvents) {
            return
        }
        this.logs.push(LogFormatter.log('DoCheck'))
    }

    ngAfterContentInit() {
        if (!this.logger.showAllEvents) {
            return
        }
        this.logs.push(LogFormatter.log('AfterContentInit'))
    }

    ngAfterContentChecked() {
        if (!this.logger.showAllEvents) {
            return
        }
        this.logs.push(LogFormatter.log('AfterContentChecked'))
    }

    ngAfterViewInit() {
        if (!this.logger.showAllEvents) {
            return
        }
        this.logs.push(LogFormatter.log('AfterViewInit'))
    }

    ngAfterViewChecked() {
        if (!this.logger.showAllEvents) {
            return
        }
        this.logs.push(LogFormatter.log('AfterViewChecked'))
    }

    callChangeClick() {
        setTimeout(() => {
            // this.internal += '*'
            this.injectedText += '*'
        }, 1000)
    }

}
