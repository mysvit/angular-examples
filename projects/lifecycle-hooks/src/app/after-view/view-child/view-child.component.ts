import {Component, SimpleChanges} from '@angular/core';
import {LogFormatter, LoggerService} from "../../logger.service";

@Component({
    selector: 'app-view-child',
    templateUrl: './view-child.component.html',
    styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent {

    childText: string = 'child'
    logs: string[] = []

    constructor(private logger: LoggerService) {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!this.logger.showAllEvents) {
            return
        }
        console.log(changes)
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

    ngOnDestroy() {
        if (!this.logger.showAllEvents) {
            return
        }
        this.logs.push(LogFormatter.log('OnDestroy'))
    }


}
