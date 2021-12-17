import {Component} from '@angular/core';
import {LogFormatter} from '../logger.service'
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

    constructor(fb: FormBuilder) {
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

}
