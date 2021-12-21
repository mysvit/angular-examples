import {Component} from '@angular/core';
import {LoggerService} from '../../logger.service'
import {AppBase} from "../../app.base";

@Component({
    selector: 'app-projected-child',
    templateUrl: './projected-child.component.html',
    styleUrls: ['./projected-child.component.scss']
})
export class ProjectedChildComponent extends AppBase {

    childText: string = 'Injected Text'

    constructor(logger: LoggerService) {
        super(logger)
    }

}
