import {Component} from '@angular/core';
import {LogFormatter, LoggerService} from "./logger.service";
import {AppBase} from "./app.base";

export enum LifeComponents {
    AfterView,
    AfterContent,
    OnChanges,
    OnCheck,
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent extends AppBase {

    LifeComponents = LifeComponents
    components = [
        {value: LifeComponents.AfterView, viewValue: 'ngAfterView Init & Checked'},
        {value: LifeComponents.AfterContent, viewValue: 'ngAfterContent Init & Checked'},
        {value: LifeComponents.OnChanges, viewValue: 'ngOnChanges'}
    ]
    selectedComponent?: string;

    constructor(logger: LoggerService) {
        super(logger)
    }

}
