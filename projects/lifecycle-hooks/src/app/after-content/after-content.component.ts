import {Component} from '@angular/core';
import {LogFormatter, LoggerService} from '../logger.service'
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-after-content',
    templateUrl: './after-content.component.html',
    styleUrls: ['./after-content.component.scss']
})
export class AfterContentComponent {

    appText: string = '';
    logs: string[] = [];
    checker: FormGroup;

    constructor(fb: FormBuilder, private logger:LoggerService) {
        this.checker = fb.group({
            inject: true,
            project: true
        });
        this.checker.valueChanges.subscribe(() => this.checkChanged())
    }

    checkChanged() {
        // this.appText = this.checker.value.inject ? this.appText : ''
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

}
