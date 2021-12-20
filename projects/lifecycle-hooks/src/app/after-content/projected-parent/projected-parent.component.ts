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

    @ContentChild(ProjectedChildComponent) injectedComponent!: ProjectedChildComponent;

    constructor(logger: LoggerService) {
        super(logger)
    }

    override ngAfterContentInit() {
        if (this.injectedComponent) {
            this.logs.push(LogFormatter.log('AfterContentInit: CHILD component initialized'))
        } else {
            this.parentText = ''
            this.logs.push(LogFormatter.log('AfterContentInit: CHILD component NOT initialized'))
        }
    }

    override ngAfterContentChecked() {
        if (!this.injectedComponent) {
            this.parentText = ''
            this.logs.push(LogFormatter.log('AfterContentChecked: No CHILD component'))
            return
        }
        if (this.parentText === this.injectedComponent.childText) {
            this.logs.push(LogFormatter.log('AfterContentChecked: Not Changed'))
        } else {
            this.parentText = this.injectedComponent.childText
            this.logs.push(LogFormatter.log('AfterContentChecked: Changed childText in CHILD component'))
        }
    }

}
