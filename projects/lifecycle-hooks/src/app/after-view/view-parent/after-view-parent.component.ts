import {Component, ViewChild} from '@angular/core';
import {LogFormatter, LoggerService} from "../../logger.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ViewChildComponent} from "../view-child/view-child.component";
import {AppBase} from "../../app.base";

@Component({
    selector: 'app-after-view',
    templateUrl: './after-view-parent.component.html',
    styleUrls: ['./after-view-parent.component.scss']
})
export class AfterViewParentComponent extends AppBase {

    parentText: string = ''
    checker: FormGroup

    @ViewChild(ViewChildComponent) viewChild!: ViewChildComponent;

    constructor(fb: FormBuilder, logger: LoggerService) {
        super(logger)
        this.checker = fb.group({
            child: true
        });
        this.checker.valueChanges.subscribe(() => this.changeText())
    }

    override ngAfterViewInit() {
        if (this.viewChild) {
            this.changeText()
            this.logs.push(LogFormatter.log('AfterViewInit: VIEW CHILD initialized'))
        } else {
            this.logs.push(LogFormatter.log('AfterViewInit: VIEW CHILD NOT initialized'))
        }
    }

    override ngAfterViewChecked() {
        if (this.viewChild) {
            if (this.parentText === this.viewChild.childText) {
                this.logs.push(LogFormatter.log('AfterViewChecked: Not Changed'))
            } else {
                this.changeText()
                this.logs.push(LogFormatter.log('AfterViewChecked: Changed childText in VIEW CHILD component'))
            }
        } else {
            this.logs.push(LogFormatter.log('AfterViewChecked: No VIEW CHILD'))
        }
    }

    // Wait a tick because the component's view has already been checked
    private changeText() {
        setTimeout(() => {
            this.parentText = this.viewChild ? this.viewChild.childText : 'parent can be changed'
        }, 0)
    }

}
