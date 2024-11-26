import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {OnChangesParentComponent} from './on-changes/on-changes-parent/on-changes-parent.component';
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProjectedParentComponent} from './after-content/projected-parent/projected-parent.component';
import {ProjectedChildComponent} from './after-content/projected-child/projected-child.component';
import {AfterViewParentComponent} from './after-view/view-parent/after-view-parent.component'
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {MatLegacyCardModule as MatCardModule} from "@angular/material/legacy-card";
import {ViewChildComponent} from './after-view/view-child/view-child.component';
import {MatLegacySelectModule as MatSelectModule} from "@angular/material/legacy-select";
import {OnChangesChildComponent} from './on-changes/on-changes-child/on-changes-child.component';
import {LogComponent} from './log/log.component';
import {OnCheckParentComponent} from './on-check/on-check-parent/on-check-parent.component';
import {OnCheckChildComponent} from './on-check/on-check-child/on-check-child.component';

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
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        ReactiveFormsModule,
        MatSelectModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
