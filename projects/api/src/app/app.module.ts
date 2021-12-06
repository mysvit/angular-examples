import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http'
import {HttpLogService} from './http/http-log.service'
import {HttpErrorHandler} from './http/http-error-handler.service'
import {httpInterceptorProviders} from './http-interceptors'
import {AuthService} from './http/auth.service'
import {MatButtonModule} from '@angular/material/button'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, HttpClientModule, MatButtonModule
    ],
    providers: [
        HttpLogService,
        HttpErrorHandler,
        AuthService,
        httpInterceptorProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
