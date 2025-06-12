import {Injectable, signal, WritableSignal} from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class AnimateService {

    private isAnimate$: WritableSignal<boolean> = signal(false)
    isAnimate = this.isAnimate$.asReadonly()

    startAnimation() {
        this.isAnimate$.set(true)
    }

    stopAnimation() {
        this.isAnimate$.set(false)
    }

}
