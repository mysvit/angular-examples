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

    // // ngAfterContentInit() {
    // //     // contentChild is set after the content has been initialized
    // //     this.logIt('AfterContentInit')
    // //     this.doSomething()
    // // }
    //
    // ngAfterContentChecked() {
    //     // const text = _.cloneDeep(this.injectedComponent.cText)
    //     // console.log('AfterContentChecked => ProjectedComponent', this.injectedComponent.cText)
    //     // this.logger.log('AfterContentChecked => ProjectedComponent')
    //     this.logIt('AfterContentChecked')
    //     // this.doSomething()
    //
    //     // this.logger.log('ngAfterContentChecked triggered')
    //     // contentChild is updated after the content has been checked
    //     // if (this.prevText === this.injectedComponent.cText) {
    //     //     this.logIt('AfterContentChecked (no change)')
    //     // } else {
    //     //     this.prevText = this.injectedComponent.cText
    //     //     setTimeout(() => {
    //     //         this.logIt('AfterContentChecked')
    //     //     }, 0)
    //     //     this.doSomething()
    //     // }
    // }
    //
    // ngAfterViewInit() {
    //     // viewChild is set after the view has been initialized
    //     // this.logIt('AfterViewInit');
    //     // this.doSomething();
    //     console.log('injectedView', this.injectedView)
    // }
    //
    // ngAfterViewChecked() {
    //     console.log('ngAfterViewChecked => ProjectedComponent', this.injectedView.cText)
    //     this.logIt('AfterViewChecked');
    //     this.changeDetector.markForCheck()
    //     // viewChild is updated after the view has been checked
    //     // if (this.prevHero === this.viewChild.hero) {
    //     // } else {
    //     //     this.prevHero = this.viewChild.hero;
    //     //     this.logIt('AfterViewChecked');
    //     //     this.doSomething();
    //     // }
    // }
    //
    // ngDoCheck() {
    //
    // }
    //
    // // This surrogate for real business logic sets the `comment`
    // private doSomething() {
    //     // const child = this.injectedContent;
    //     // const length = child ? child.cText.length : '0'
    //     // this.comment = `We work with Injected component. Message length: ${length}`;
    // }
    //
    // private logIt(method: string) {
    //     // const child = this.injectedContent;
    //     // const message = `${method}: ===${child ? child.cText : 'no'}=== child content`;
    //     // this.logger.log(message);
    //     this.logger.log(`injectedView ${this.injectedView ? this.injectedView.cText : 'noView'}`);
    //     // console.log('TTTTTTT', child.cText)
    //     console.log(this.logger.messages)
    // }

}
