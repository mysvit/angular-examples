import {Component} from '@angular/core';
import {Subject} from 'rxjs'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    stopwatchValue = 0;
    stopwatchValue$: Subject<number> = new Subject<number>();

    constructor() {
        this.stopwatchValue$.subscribe(num =>
            this.stopwatchValue += num
        );
    }

    start() {
        this.stopwatchValue$.next(1);
    }

    ngOnDestroy() {
        this.stopwatchValue$.unsubscribe();
    }

}
