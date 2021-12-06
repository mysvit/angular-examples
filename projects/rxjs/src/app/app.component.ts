import {Component, OnDestroy} from '@angular/core';
import {debounceTime, distinctUntilChanged, interval, Subject, takeUntil} from 'rxjs'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

    constructor() {
        this.distinctUntilSubscribe()
    }

    ngOnDestroy() {
        this.distinctUntilUnSubscribe()
    }


    inputUpdate$: Subject<number> = new Subject<number>();
    distinctUntilValue = 0;
    clickValue = 0;

    distinctUntilSubscribe() {
        this.inputUpdate$.asObservable()
            .pipe(
                debounceTime(1000),
                distinctUntilChanged()
            )
            .subscribe(() => {
                this.distinctUntilValue++
            })
    }

    distinctUntilClick() {
        this.clickValue++
        this.inputUpdate$.next(Math.random())
    }

    distinctUntilUnSubscribe() {
        this.inputUpdate$.unsubscribe()
    }

    // *******************************************************************************************

    takeUntilValue: number = 0
    public stopTakeUntil$: Subject<boolean> = new Subject<boolean>();

    takeUntilStartClick() {
        this.takeUntilValue = 0
        this.stopTakeUntil$.next(true)
        const source = interval(500)
        source.pipe(
            takeUntil(this.stopTakeUntil$)
        ).subscribe(() => {
            this.takeUntilValue++
            console.log(this.takeUntilValue)
        })
    }

    takeUntilStopClick() {
        this.stopTakeUntil$.next(true)
    }

    // *******************************************************************************************

}
