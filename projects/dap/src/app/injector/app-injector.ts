import { Injector } from '@angular/core'

let APP_INJECTOR: Injector

export function setAppInjector(injector: Injector) {
    APP_INJECTOR = injector
}

export { APP_INJECTOR }
