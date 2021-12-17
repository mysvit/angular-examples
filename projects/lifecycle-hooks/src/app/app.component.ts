import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LogFormatter} from "./logger.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {

    logs: string[] = [];
    appText?: string;

    ngOnChanges(changes: SimpleChanges) {
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

    ngOnDestroy() {
        this.logs.push(LogFormatter.log('OnDestroy'))
    }

}
