import {Component} from '@angular/core';
import {AppBase} from "../../app.base";
import {LoggerService} from "../../logger.service";

@Component({
    selector: 'app-on-check-child',
    templateUrl: './on-check-child.component.html',
    styleUrls: ['./on-check-child.component.scss']
})
export class OnCheckChildComponent extends AppBase {

    childText: string = 'child and parent two way changes'

    constructor(logger: LoggerService) {
        super(logger)
    }

}
