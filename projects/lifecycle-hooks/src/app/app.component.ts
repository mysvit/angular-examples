import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    major = 1;
    minor = 13;

    newMinorClick() {
        this.minor++;
    }

    newMajorClick() {
        this.major++;
        this.minor = 0;
    }
}
