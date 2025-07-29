import { AnimateService } from './animate.service'
import { APP_INJECTOR }   from '../services/app-injector'

export function AnimateStart() {

    return function (
        target: Object,                 // The prototype of the class (e.g., MyService.prototype)
        propertyKey: string,            // The name of the method (e.g., 'calculateSum')
        descriptor: PropertyDescriptor  // The property descriptor for the method
    ) {
        console.log('AnimateStart target', target)
        console.log('AnimateStart propertyKey', propertyKey)
        // Store a reference to the original method implementation
        const originalMethod = descriptor.value

        // Replace the original method with a new function
        descriptor.value = function (...args: any[]) {
            // IMPORTANT: Call inject() *inside* the function that will run at runtime.
            if (APP_INJECTOR) {
                const animate = APP_INJECTOR?.get(AnimateService)
                animate.startAnimation()
            }
            return originalMethod.apply(this, args)
        }

        // Return the modified descriptor
        return descriptor
    }

}

/**
 * A decorators class decorator that logs lifecycle events (OnInit, OnDestroy)
 * for components, directives, or services that implement these interfaces.
 */
export function AnimateStop<T extends { new(...args: any[]): {} }>(constructor: T) {
    // Store original methods
    const originalOnInit = constructor.prototype.ngOnInit

    // Augment ngOnInit
    constructor.prototype.ngOnInit = function (...args: any[]) {
        if (APP_INJECTOR) {
            const animate = APP_INJECTOR?.get(AnimateService)
            animate?.stopAnimation()
        }
        if (originalOnInit) {
            originalOnInit.apply(this, args)
        }
    }

    return constructor // Return the augmented constructor
}


export const StartAnimation = () => {
    const animate = APP_INJECTOR?.get(AnimateService)
    animate?.startAnimation()
}

export const StopAnimation = () => {
    const animate = APP_INJECTOR?.get(AnimateService)
    animate?.stopAnimation()
}
