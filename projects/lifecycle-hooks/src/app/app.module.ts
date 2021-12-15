import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {OnChangesComponent} from './on-changes/on-changes.component';
import {AfterContentComponent} from './after-content/after-content.component';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {FormsModule} from '@angular/forms';
import { ProjectedComponent } from './after-content/projected/projected.component';
import { InjectedComponent } from './after-content/injected/injected.component';
import { AfterViewComponent } from './after-view/after-view.component'

@NgModule({
    declarations: [
        AppComponent,
        OnChangesComponent,
        AfterContentComponent,
        ProjectedComponent,
        InjectedComponent,
        AfterViewComponent
    ],
    imports: [
        BrowserModule,
        MatCheckboxModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
