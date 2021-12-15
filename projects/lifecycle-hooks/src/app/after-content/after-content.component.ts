import {Component} from '@angular/core';
import {LoggerService} from '../logger.service'

@Component({
    selector: 'app-after-content',
    templateUrl: './after-content.component.html',
    styleUrls: ['./after-content.component.scss']
})
export class AfterContentComponent {
    isInject: boolean = true
    // @ViewChild('notInjected') injectedComponent!: InjectedComponent;
    rootStr: string = ''

    constructor(public logger: LoggerService) {
    }

    clearLogClick() {
        this.logger.clear()
        // setTimeout(() => {
        //     this.injectedComponent.cText += '-'
        // }, 2000)
    }

    ngAfterContentChecked() {
        console.log('AfterContentChecked => AfterContentComponent')
        // this.logger.log('AfterContentChecked => AfterContentComponent')
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked => AfterContentComponent')
    }

    changeEvent(event: Event) {
        console.log('changeEvent', event)
    }

    TrackByStr(index:number, str: string) {
        return str;
    }
}
