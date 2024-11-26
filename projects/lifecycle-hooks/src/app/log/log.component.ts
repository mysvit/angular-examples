import {AfterViewChecked, Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
    selector: 'app-log',
    templateUrl: './log.component.html',
    styleUrls: ['./log.component.scss'],
    standalone: false
})
export class LogComponent implements AfterViewChecked {

    @Input() logs!: string[]

    @ViewChild('scroll') scroll!: ElementRef

    ngAfterViewChecked() {
        this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight
    }

    clearLogs() {
        this.logs.splice(0, this.logs.length)
    }

}
