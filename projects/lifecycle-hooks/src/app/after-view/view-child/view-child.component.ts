import {Component} from '@angular/core';
import {LoggerService} from "../../logger.service";
import {AppBase} from "../../app.base";

@Component({
    selector: 'app-view-child',
    templateUrl: './view-child.component.html',
    styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent extends AppBase {

    childText: string = 'child override parent'

    constructor(logger: LoggerService) {
        super(logger)
    }

}
