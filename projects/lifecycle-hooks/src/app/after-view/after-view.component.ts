import {Component, ViewChild} from '@angular/core';
import {LogFormatter} from "../logger.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ViewChildComponent} from "./view-child/view-child.component";

@Component({
    selector: 'app-after-view',
    templateUrl: './after-view.component.html',
    styleUrls: ['./after-view.component.scss']
})
export class AfterViewComponent {

    prevText: string = ''
    logs: string[] = []
    checker: FormGroup

    @ViewChild(ViewChildComponent) viewChild!: ViewChildComponent;

    constructor(fb: FormBuilder) {
        this.checker = fb.group({
            child: true
        });
        this.checker.valueChanges.subscribe(() => this.changeText())
    }

    ngOnChanges() {
        this.logs.push(LogFormatter.log('OnChanges'))
    }

    ngOnInit() {
        this.logs.push(LogFormatter.log('OnInit'))
    }

    ngDoCheck() {
        this.logs.push(LogFormatter.log('DoCheck'))
    }

    ngAfterContentInit() {
        this.logs.push(LogFormatter.log('AfterContentInit'))
    }

    ngAfterContentChecked() {
        this.logs.push(LogFormatter.log('AfterContentChecked'))
    }

    ngAfterViewInit() {
        if (this.viewChild) {
            this.changeText()
            this.logs.push(LogFormatter.log('AfterViewInit: VIEW CHILD initialized'))
        } else {
            this.logs.push(LogFormatter.log('AfterViewInit: VIEW CHILD NOT initialized'))
        }
    }

    ngAfterViewChecked() {
        if (this.viewChild) {
            if (this.prevText === this.viewChild.childText) {
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
            this.prevText = this.viewChild ? this.viewChild.childText : ''
        }, 0)
    }

}
