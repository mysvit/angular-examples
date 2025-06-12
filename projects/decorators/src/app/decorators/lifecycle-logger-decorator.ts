/**
 * A decorators class decorator that logs lifecycle events (OnInit, OnDestroy)
 * for components, directives, or services that implement these interfaces.
 */
export function LifecycleLogger<T extends { new(...args: any[]): {} }>(constructor: T) {
    // Store original methods
    const originalOnInit = constructor.prototype.ngOnInit
    const originalOnDestroy = constructor.prototype.ngOnDestroy
    const className = constructor.name

    // Augment ngOnInit
    constructor.prototype.ngOnInit = function (...args: any[]) {
        console.log(`[LIFECYCLE] ${className}: ngOnInit`)
        if (originalOnInit) {
            originalOnInit.apply(this, args)
        }
    }

    // Augment ngOnDestroy
    constructor.prototype.ngOnDestroy = function (...args: any[]) {
        console.log(`[LIFECYCLE] ${className}: ngOnDestroy`)
        if (originalOnDestroy) {
            originalOnDestroy.apply(this, args)
        }
    }

    return constructor; // Return the augmented constructor
}
