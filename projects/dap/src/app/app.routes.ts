import { Routes } from '@angular/router'
import { SingletonComponent } from './singleton/singleton.component'
import { InputRootComponent } from './input/input-root'
import { FormRootComponent } from './form/form-root.component'
import { CounterParentRootComponent } from './counter/parent-root'
import { GridRootComponent } from './grid/grid-root.component'

export const routes: Routes = [
    {path: 'singleton', component: SingletonComponent},
    {path: 'counter', component: CounterParentRootComponent},
    {path: 'grid', component: GridRootComponent},
    {path: 'input', component: InputRootComponent},
    {path: 'form', component: FormRootComponent}
]
