import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ArrayComponent} from './array/array.component';
import {FormsModule} from '@angular/forms';
import { SimulateClickComponent } from './simulate-click/simulate-click.component';

@NgModule({
    declarations: [
        AppComponent,
        ArrayComponent,
        SimulateClickComponent,
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
