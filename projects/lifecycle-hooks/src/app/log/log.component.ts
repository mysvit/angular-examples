import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-log',
    templateUrl: './log.component.html'
})
export class LogComponent {

    @Input() logs!: string[]

}
