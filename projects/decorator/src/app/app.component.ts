import {Component} from '@angular/core';
import {TrackChanges} from "./custom/сhanges-decorator";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    value1: number = 0
    value2: number = 0

    changeVal1Click() {
        this.value1++
    }

    changeVal2Click() {
        this.value2++
    }

}
