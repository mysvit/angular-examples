import {Component, ViewChild} from '@angular/core';
import {LogFormatter, LoggerService} from "../../logger.service";
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {ViewChildComponent} from "../view-child/view-child.component";
import {AppBase} from "../../app.base";

@Component({
    selector: 'app-after-view',
    templateUrl: './after-view-parent.component.html',
    styleUrls: ['./after-view-parent.component.scss']
})
export class AfterViewParentComponent extends AppBase {

    parentText: string = ''
    isShowWithoutTick: boolean = false;
    parentTextNoTick: string = ''
    checker: UntypedFormGroup

    @ViewChild(ViewChildComponent) viewChild!: ViewChildComponent;

    constructor(fb: UntypedFormBuilder, logger: LoggerService) {
        super(logger)
        this.checker = fb.group({
            child: true
        });
        this.checker.valueChanges.subscribe(() => this.changeTextWithTick())
    }

    override ngOnInit() {
        if (!this.viewChild) {
            this.logs.push(LogFormatter.log('ngOnInit: VIEW CHILD NOT initialized'))
        }
    }

    override ngAfterViewInit() {
        if (this.viewChild) {
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
                this.logs.push(LogFormatter.log('AfterViewChecked: Changed childText in VIEW CHILD component'))
                this.changeTextWithTick()
                this.changeTextWithoutTick()
            }
        } else {
            this.logs.push(LogFormatter.log('AfterViewChecked: No VIEW CHILD'))
        }
    }

    // Wait a tick because the component's view has already been checked
    private changeTextWithTick() {
        setTimeout(() => {
            this.parentText = this.viewChild ? this.viewChild.childText : 'parent can be changed'
        }, 0)
    }

    private changeTextWithoutTick() {
        this.parentTextNoTick = this.viewChild.childText
    }

}
