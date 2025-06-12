import { Component }       from '@angular/core'
import { AnimateStop }     from './animate.decorator'
import { LifecycleLogger } from '../decorators'

@AnimateStop
@LifecycleLogger
@Component({
    selector: 'app-animated',
    imports: [],
    template: '<p>When animated component created, it stop animation!</p>'
})
export class AnimatedComponent {

    constructor() {
        // same as decorator just need implement constructor in class
        // StopAnimation()
        console.log('AnimatedComponent')
    }

}
