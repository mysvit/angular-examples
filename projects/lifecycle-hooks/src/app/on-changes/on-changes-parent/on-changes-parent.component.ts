import {Component, ViewChild} from '@angular/core';
import {OnChangesChildComponent} from "../on-changes-child/on-changes-child.component";
import {AppBase} from "../../app.base";
import {LoggerService} from "../../logger.service";

@Component({
    selector: 'app-on-changes-parent',
    templateUrl: './on-changes-parent.component.html',
    styleUrls: ['./on-changes-parent.component.scss'],
    standalone: false
})
export class OnChangesParentComponent extends AppBase {

    major = 0;
    minor = 0;

    @ViewChild(OnChangesChildComponent) onChangesChild!: OnChangesChildComponent;

    constructor(logger: LoggerService) {
        super(logger)
    }

    majorClick() {
        this.major++
    }

    minorClick() {
        this.minor++
    }

    majorChildClick() {
        this.onChangesChild.major++
    }

    minorChildClick() {
        this.onChangesChild.minor++
    }

}
