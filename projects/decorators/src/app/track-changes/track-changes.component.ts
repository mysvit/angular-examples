import { Component, Input, SimpleChanges }                from '@angular/core'
import { ChangesStrategy, LifecycleLogger, TrackChanges } from '../decorators'

@LifecycleLogger
@Component({
    selector: 'app-track-changes',
    templateUrl: './track-changes.component.html',
    styleUrls: ['./track-changes.component.scss']
})
export class TrackChangesComponent {

    logs: Array<string> = []

    @Input() value1!: number
    @Input() value2!: number

    @TrackChanges<string>('value1', 'makeChangesVal1')
    @TrackChanges<string>('value2', 'makeChangesVal2', ChangesStrategy.First)
    ngOnChanges(changes: SimpleChanges): void {
    }

    makeChangesVal1(changedValue: number) {
        this.logs.push(`Make Changes Val1: ${changedValue}`)
    }

    // trigger just for first change
    makeChangesVal2(changedValue: number) {
        this.logs.push(`Make Changes Val2: ${changedValue}`)
    }

}
