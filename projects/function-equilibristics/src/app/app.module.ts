import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ArrayComponent} from './array/array.component';
import {FormsModule} from '@angular/forms';
import {TestComponent} from './test/test.component';
import { CodeGameComponent } from './code-game/code-game.component'

@NgModule({
    declarations: [
        AppComponent,
        ArrayComponent,
        TestComponent,
        CodeGameComponent
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
