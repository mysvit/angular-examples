import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {IfLoadedDirective} from './directives/if-loaded.directive';
import {HighlightDirective} from './directives/highlight.directive';
import {ShowDirective} from './directives/show.directive';

@NgModule({
    declarations: [
        AppComponent,
        IfLoadedDirective,
        HighlightDirective,
        ShowDirective
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
