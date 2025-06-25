import { bootstrapApplication } from '@angular/platform-browser'
import { appConfig }            from './app/app.config'
import { App }                  from './app/app'
import { setAppInjector }       from './app/injector/app-injector'

bootstrapApplication(App, appConfig)
    .then((appRef) => setAppInjector(appRef.injector))
    .catch((err) => console.error(err))
