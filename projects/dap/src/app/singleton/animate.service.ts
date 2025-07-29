import {Injectable, signal, WritableSignal} from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class AnimateService {

    private isAnimate$: WritableSignal<boolean> = signal(false)
    isAnimate = this.isAnimate$.asReadonly()

    startAnimation() {
        console.log('startAnimation')
        this.isAnimate$.set(true)
    }

    stopAnimation() {
        console.log('stopAnimation')
        this.isAnimate$.set(false)
    }

}
