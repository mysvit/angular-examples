import {Routes} from '@angular/router'
import {SingletonComponent} from './singleton/singleton.component'
import {GridComponent} from './grid/grid.component'
import {InputRootComponent} from './input/input-root'
import {ThemeRootComponent} from './them/theme-root.component'
import {PanelRootComponent} from './panel/panel-root.component'
import {FormRootComponent} from './form/form-root.component'
import {CounterParentRootComponent} from "./counter/parent-root";

export const routes: Routes = [
    {path: 'singleton', component: SingletonComponent},
    {path: 'counter', component: CounterParentRootComponent},
    {path: 'grid', component: GridComponent},
    {path: 'input', component: InputRootComponent},
    {path: 'theme', component: ThemeRootComponent},
    {path: 'panel', component: PanelRootComponent},
    {path: 'form', component: FormRootComponent}
]
