import { Injector } from '@angular/core'

let APP_INJECTOR: Injector

export function setAppInjector(injector: Injector) {
    console.log(`APP_INJECTOR: ${injector}`)
    APP_INJECTOR = injector
}

export { APP_INJECTOR }
