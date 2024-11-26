import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {InputComponent} from './input/input.component';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input'
import {ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
    declarations: [
        AppComponent,
        InputComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
