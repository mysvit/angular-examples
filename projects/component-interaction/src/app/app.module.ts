import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ServiceParentComponent} from './service-interaction/service-parent/service-parent.component';
import {ServiceChildComponent} from './service-interaction/service-child/service-child.component';
import {FormsModule} from '@angular/forms'

@NgModule({
    declarations: [
        AppComponent,
        ServiceParentComponent,
        ServiceChildComponent
    ],
    imports: [
        BrowserModule, FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
