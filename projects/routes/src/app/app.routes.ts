import { Routes } from '@angular/router'
import { AppComponent } from './app.component'

export const routes: Routes = [
    {path: 'app', component: AppComponent},
    {
        path: 'child', loadChildren: () =>
            import('./children/child-routes').then(mod => mod.childRoutes)
    }
]
