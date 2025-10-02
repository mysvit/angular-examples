import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {OnChangesParentComponent} from './on-changes/on-changes-parent/on-changes-parent.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProjectedParentComponent} from './after-content/projected-parent/projected-parent.component';
import {ProjectedChildComponent} from './after-content/projected-child/projected-child.component';
import {AfterViewParentComponent} from './after-view/view-parent/after-view-parent.component'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ViewChildComponent} from './after-view/view-child/view-child.component';
import {OnChangesChildComponent} from './on-changes/on-changes-child/on-changes-child.component';
import {LogComponent} from './log/log.component';
import {OnCheckParentComponent} from './on-check/on-check-parent/on-check-parent.component';
import {OnCheckChildComponent} from './on-check/on-check-child/on-check-child.component';
import {MatCheckbox} from "@angular/material/checkbox";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import { RenderComponent } from './render/after-next-render'

@NgModule({
    declarations: [
        AppComponent,
        OnChangesParentComponent,
        ProjectedParentComponent,
        ProjectedChildComponent,
        AfterViewParentComponent,
        ViewChildComponent,
        OnChangesChildComponent,
        LogComponent,
        OnCheckParentComponent,
        OnCheckChildComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckbox,
        MatSelect,
        MatOption,
        MatLabel,
        MatFormField,
        RenderComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
