import {Component, ViewChild} from '@angular/core';
import {AppBase} from "../../app.base";
import {LogFormatter, LoggerService} from "../../logger.service";
import {OnCheckChildComponent} from "../on-check-child/on-check-child.component";

@Component({
    selector: 'app-on-check-parent',
    templateUrl: './on-check-parent.component.html',
    styleUrls: ['./on-check-parent.component.scss'],
    standalone: false
})
export class OnCheckParentComponent extends AppBase {

    isShowChild: boolean = true;
    parentText: string = '';
    etalonText: string = '';

    @ViewChild(OnCheckChildComponent) viewChild!: OnCheckChildComponent;

    constructor(logger: LoggerService) {
        super(logger)
    }

    override ngDoCheck() {
        if (this.viewChild) {
            if (this.etalonText !== this.viewChild.childText) {
                this.logs.push(LogFormatter.log('DoCheck: Changed childText in CHILD component'))
                this.changeParentTextWithoutTick()
            } else if (this.etalonText !== this.parentText) {
                this.logs.push(LogFormatter.log('DoCheck: Changed parentText in PARENT component'))
                this.changeChildTextWithoutTick()
            } else {
                this.logs.push(LogFormatter.log('DoCheck: Not Changed'))
            }
        } else {
            this.logs.push(LogFormatter.log('DoCheck: No VIEW CHILD'))
        }
    }

    changeParentTextWithoutTick() {
        this.etalonText = this.viewChild.childText
        this.parentText = this.viewChild.childText
    }

    changeChildTextWithoutTick() {
        this.etalonText = this.parentText
        this.viewChild.childText = this.parentText
    }

}
