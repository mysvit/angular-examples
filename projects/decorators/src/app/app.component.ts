import { Component, signal }                               from '@angular/core'
import { TrackChangesComponent }                           from './track-changes/track-changes.component'
import { AnimatedComponent, AnimateService, AnimateStart } from './animated'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [
        TrackChangesComponent,
        AnimatedComponent
    ],
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    isShowAnimatedComponent = signal(false)

    value1: number = 0
    value2: number = 0

    constructor(public animate: AnimateService) {
    }

    changeVal1Click() {
        this.value1++
    }

    changeVal2Click() {
        this.value2++
    }

    @AnimateStart()
    handleClickEvent() {
        // same as decorator
        // StartAnimation()
        this.isShowAnimatedComponent.set(false)
        setTimeout(() => this.isShowAnimatedComponent.set(true), 2000)
    }

}
