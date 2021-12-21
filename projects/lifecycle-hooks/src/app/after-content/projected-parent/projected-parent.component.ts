import {Component, ContentChild} from '@angular/core';
import {LogFormatter, LoggerService} from '../../logger.service'
import {ProjectedChildComponent} from '../projected-child/projected-child.component'
import {AppBase} from "../../app.base";

@Component({
    selector: 'app-projected-parent',
    templateUrl: './projected-parent.component.html',
    styleUrls: ['./projected-parent.component.scss']
})
export class ProjectedParentComponent extends AppBase {

    parentText?: string;
    isShowWithoutTick: boolean = false;

    @ContentChild(ProjectedChildComponent) projectedChild!: ProjectedChildComponent;

    constructor(logger: LoggerService) {
        super(logger)
    }

    override ngOnInit() {
        if (!this.projectedChild) {
            this.logs.splice(0, 0, LogFormatter.log('ngOnInit: PROJECTED CHILD NOT initialized'))
        }
    }

    override ngAfterContentInit() {
        if (this.projectedChild) {
            this.logs.splice(0, 0, LogFormatter.log('AfterContentInit: PROJECTED CHILD initialized'))
        } else {
            this.parentText = ''
            this.logs.splice(0, 0, LogFormatter.log('AfterContentInit: PROJECTED CHILD NOT initialized'))
        }
    }

    override ngAfterContentChecked() {
        if (!this.projectedChild) {
            this.parentText = ''
            this.logs.splice(0, 0, LogFormatter.log('AfterContentChecked: No PROJECTED CHILD'))
            return
        }
        if (this.parentText === this.projectedChild.childText) {
            this.logs.splice(0, 0, LogFormatter.log('AfterContentChecked: Not Changed'))
        } else {
            this.parentText = this.projectedChild.childText
            this.logs.splice(0, 0, LogFormatter.log('AfterContentChecked: Changed childText in PROJECTED CHILD'))
        }
    }

}
