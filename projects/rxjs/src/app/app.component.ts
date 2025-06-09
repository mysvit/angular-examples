import {Component, OnDestroy, signal, WritableSignal} from '@angular/core';
import {debounceTime, distinctUntilChanged, filter, forkJoin, interval, map, of, Subject, takeUntil} from 'rxjs'
import {toObservable} from "@angular/core/rxjs-interop";
import {tap} from "rxjs/operators";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
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

    // base on signal

    stopSignal: WritableSignal<boolean> = signal(false)
    private stopSignalObservable = toObservable(this.stopSignal)
        .pipe(
            filter(isStopped => isStopped === true), // <-- Only let 'true' values pass through
            tap(() => console.log('STOP NOTIFIER EMITTED TRUE! (Interval should now complete)')) // For debugging
        )

    takeUntilSignalStartClick() {
        this.stopSignalObservable.subscribe({
            next: value => console.log(`stopSignalObservable 1 ${value}`)
        })
        this.stopSignalObservable.subscribe({
            next: value => console.log(`stopSignalObservable 2 ${value}`)
        })

        this.stopSignal.set(false)

        interval(100) // Emits 0, 1, 2, ... every 1 second
            .pipe(
                takeUntil(this.stopSignalObservable)
            )
            .subscribe({
                next: (value) => console.log(`Subscriber received ${value} at:`, new Date().toLocaleTimeString()),
                error: (error) => console.error('Error:', error),
                complete: () => console.log('Observable completed!')
            })
    }

    takeUntilSignalStopClick() {
        this.stopSignal.set(true)
    }

    // *******************************************************************************************

    forkJoinClick() {
        forkJoin([
            of(1),
            of(undefined)
        ])
            .pipe(
                map((res) => {
                    console.log('res', res)
                    console.log(res.filter(f => f))
                }),
            )
            .subscribe()
    }

    // *******************************************************************************************

}
