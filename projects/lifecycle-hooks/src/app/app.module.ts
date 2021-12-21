import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {OnChangesParentComponent} from './on-changes/on-changes-parent/on-changes-parent.component';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProjectedParentComponent} from './after-content/projected-parent/projected-parent.component';
import {ProjectedChildComponent} from './after-content/projected-child/projected-child.component';
import {AfterViewParentComponent} from './after-view/view-parent/after-view-parent.component'
import {MatFormFieldModule} from "@angular/material/form-field";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {ViewChildComponent} from './after-view/view-child/view-child.component';
import {MatSelectModule} from "@angular/material/select";
import {OnChangesChildComponent} from './on-changes/on-changes-child/on-changes-child.component';
import {LogComponent} from './log/log.component';

@NgModule({
    declarations: [
        AppComponent,
        OnChangesParentComponent,
        ProjectedParentComponent,
        ProjectedChildComponent,
        AfterViewParentComponent,
        ViewChildComponent,
        OnChangesChildComponent,
        LogComponent
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
