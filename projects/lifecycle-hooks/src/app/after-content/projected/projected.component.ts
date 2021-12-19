import {ChangeDetectorRef, Component, ContentChild} from '@angular/core';
import {LogFormatter} from '../../logger.service'
import {InjectedComponent} from '../injected/injected.component'

@Component({
    selector: 'app-projected',
    templateUrl: './projected.component.html',
    styleUrls: ['./projected.component.scss']
})
export class ProjectedComponent {

    prevText?: string;
    logs: string[] = [];

    @ContentChild(InjectedComponent) injectedComponent!: InjectedComponent;

    constructor(private changeDetector: ChangeDetectorRef) {
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
        if (this.injectedComponent){
            this.logs.push(LogFormatter.log('AfterContentInit: INJECTED COMPONENT initialized'))
        } else {
            this.prevText = ''
            this.logs.push(LogFormatter.log('AfterContentInit: INJECTED COMPONENT NOT initialized'))
        }
    }

    ngAfterContentChecked() {
        if (!this.injectedComponent){
            this.prevText = ''
            this.logs.push(LogFormatter.log('AfterContentChecked: No INJECTED COMPONENT'))
            return
        }
        if (this.prevText === this.injectedComponent.injectedText) {
            this.logs.push(LogFormatter.log('AfterContentChecked: Not Changed'))
        } else {
            this.prevText = this.injectedComponent.injectedText
            this.logs.push(LogFormatter.log('AfterContentChecked: Changed injectedText in Injected component'))
        }
    }

    ngAfterViewInit() {
        this.logs.push(LogFormatter.log('AfterViewInit'))
    }

    ngAfterViewChecked() {
        this.logs.push(LogFormatter.log('AfterViewChecked'))
    }

}
