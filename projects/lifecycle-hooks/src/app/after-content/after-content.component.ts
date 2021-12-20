import {Component} from '@angular/core';
import {LoggerService} from '../logger.service'
import {FormBuilder, FormGroup} from "@angular/forms";
import {AppBase} from "../app.base";

@Component({
    selector: 'app-after-content',
    templateUrl: './after-content.component.html',
    styleUrls: ['./after-content.component.scss']
})
export class AfterContentComponent extends AppBase {

    appText: string = '';
    checker: FormGroup;

    constructor(fb: FormBuilder, logger: LoggerService) {
        super(logger)
        this.checker = fb.group({
            inject: true,
            project: true
        });
        this.checker.valueChanges.subscribe(() => this.checkChanged())
    }

    checkChanged() {
        // this.appText = this.checker.value.inject ? this.appText : ''
    }

}
