import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection} from '@angular/core'
import {provideRouter} from '@angular/router'
import {routes} from './app.routes'
import {CounterService, SERVICE_LOCATION} from './counter/counter.service'
import {ServiceLocation} from './service-location'

export const appConfig: ApplicationConfig = {
    providers: [
        {provide: SERVICE_LOCATION, useValue: ServiceLocation.root},
        CounterService,
        // two-way to declare
        // {provide: CounterService, useFactory: () => new CounterService('root')},
        provideBrowserGlobalErrorListeners(),
        provideZonelessChangeDetection(),
        provideRouter(routes)
    ]
}
