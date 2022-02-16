import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ImgComponent} from './style/img/img.component';
import {FlexComponent} from './style/flex/flex.component';
import {TagTableComponent} from './style/tag-table/tag-table.component';

@NgModule({
    declarations: [
        AppComponent,
        ImgComponent,
        FlexComponent,
        TagTableComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
