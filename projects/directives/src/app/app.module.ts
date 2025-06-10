import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HighlightDirective} from "./directives/highlight.directive";
import {ShowDirective} from "./directives/show.directive";
import {ClassDirective} from "./directives/class.directive";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HighlightDirective,
        ShowDirective,
        ClassDirective
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
