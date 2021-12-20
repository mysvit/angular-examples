import {Component, Input, SimpleChanges} from '@angular/core';
import {LogFormatter, LoggerService} from "../../logger.service";
import {AppBase} from "../../app.base";

@Component({
    selector: 'app-on-changes-child',
    templateUrl: './on-changes-child.component.html',
    styleUrls: ['./on-changes-child.component.scss']
})
export class OnChangesChildComponent extends AppBase {

    @Input() major = 0;
    @Input() minor = 0;

    constructor(logger: LoggerService) {
        super(logger)
    }

    override ngOnChanges(changes: SimpleChanges) {
        for (const propName in changes) {
            const changedProp = changes[propName];
            const cur = JSON.stringify(changedProp.currentValue);
            const prev = JSON.stringify(changedProp.previousValue);
            this.logs.push(LogFormatter.log(`ngOnChanges - ${propName}: currentValue = ${cur}, previousValue = ${prev}`))
        }
    }

}
