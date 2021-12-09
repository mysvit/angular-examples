import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ArrayComponent} from './array/array.component';
import {FormsModule} from '@angular/forms';
import {TestComponent} from './test/test.component'

@NgModule({
    declarations: [
        AppComponent,
        ArrayComponent,
        TestComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
