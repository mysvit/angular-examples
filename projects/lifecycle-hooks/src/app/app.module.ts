import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {OnChangesComponent} from './on-changes/on-changes.component';
import {AfterContentComponent} from './after-content/after-content.component';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProjectedComponent} from './after-content/projected/projected.component';
import {InjectedComponent} from './after-content/injected/injected.component';
import {AfterViewComponent} from './after-view/after-view.component'
import {MatFormFieldModule} from "@angular/material/form-field";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import { ViewChildComponent } from './after-view/view-child/view-child.component';

@NgModule({
    declarations: [
        AppComponent,
        OnChangesComponent,
        AfterContentComponent,
        ProjectedComponent,
        InjectedComponent,
        AfterViewComponent,
        ViewChildComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
