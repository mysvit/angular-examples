import {Component} from '@angular/core';
import {LogFormatter} from "../../logger.service";

@Component({
    selector: 'app-view-child',
    templateUrl: './view-child.component.html',
    styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent {

    childText: string = 'child'
    logs: string[] = []

    constructor() {
    }

    ngOnChanges() {
        this.logs.push(LogFormatter.log('OnChanges'))
    }

    ngOnInit() {
        this.logs.push(LogFormatter.log('OnInit'))
    }

}
