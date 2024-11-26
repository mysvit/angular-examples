import {Component} from '@angular/core';
import {LoggerService} from "./logger.service";
import {AppBase} from "./app.base";

export enum LifeComponents {
    AfterView,
    AfterContent,
    OnCheck,
    OnChanges
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent extends AppBase {

    LifeComponents = LifeComponents
    components = [
        {value: LifeComponents.AfterView, viewValue: 'ngAfterView Init & Checked'},
        {value: LifeComponents.AfterContent, viewValue: 'ngAfterContent Init & Checked'},
        {value: LifeComponents.OnCheck, viewValue: 'ngOnCheck'},
        {value: LifeComponents.OnChanges, viewValue: 'ngOnChanges'}
    ]
    selectedComponent?: string;

    constructor(logger: LoggerService) {
        super(logger)
    }

}
