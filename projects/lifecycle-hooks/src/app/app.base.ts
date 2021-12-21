import {LogFormatter, LoggerService} from "./logger.service";
import {Injectable, SimpleChanges} from "@angular/core";

@Injectable()
export abstract class AppBase {

    logs: string[] = [];

    protected constructor(public logger: LoggerService) {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!this.logger.showAllEvents) {
            return
        }
        this.logs.splice(0, 0, LogFormatter.log('OnChanges'))
    }

    ngOnInit() {
        if (!this.logger.showAllEvents) {
            return
        }
        this.logs.splice(0, 0, LogFormatter.log('OnInit'))
    }

    ngDoCheck() {
        if (!this.logger.showAllEvents) {
            return
        }
        this.logs.splice(0, 0, LogFormatter.log('DoCheck'))
    }

    ngAfterContentInit() {
        if (!this.logger.showAllEvents) {
            return
        }
        this.logs.splice(0, 0, LogFormatter.log('AfterContentInit'))
    }

    ngAfterContentChecked() {
        if (!this.logger.showAllEvents) {
            return
        }
        this.logs.splice(0, 0, LogFormatter.log('AfterContentChecked'))
    }

    ngAfterViewInit() {
        if (!this.logger.showAllEvents) {
            return
        }
        this.logs.splice(0, 0, LogFormatter.log('AfterViewInit'))
    }

    ngAfterViewChecked() {
        if (!this.logger.showAllEvents) {
            return
        }
        this.logs.splice(0, 0, LogFormatter.log('AfterViewChecked'))
    }

    ngOnDestroy() {
        if (!this.logger.showAllEvents) {
            return
        }
        this.logs.splice(0, 0, LogFormatter.log('OnDestroy'))
    }

}
