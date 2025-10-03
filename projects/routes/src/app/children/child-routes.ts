import { Routes } from '@angular/router'
import { ChildRootComponent } from './child-root'
import { ChildListComponent } from './child-list.component'
import { ChildDetailComponent } from './child-detail'

export const childRoutes: Routes = [
    {
        path: '', component: ChildRootComponent,
        children: [
            {path: 'child-list', component: ChildListComponent},
            {path: 'child-detail/:id', component: ChildDetailComponent},
            {path: 'child-detail', component: ChildDetailComponent}
        ]
    },
    {path: '', redirectTo: '', pathMatch: 'full'}
]