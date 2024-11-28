import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http'
import {HttpLogService} from './http/http-log.service'
import {HttpErrorHandler} from './http/http-error-handler.service'
import {httpInterceptorProviders} from './http-interceptors'
import {AuthService} from './http/auth.service'

@NgModule({
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule],
    providers: [
        HttpLogService,
        HttpErrorHandler,
        AuthService,
        httpInterceptorProviders,
        provideHttpClient(withInterceptorsFromDi())
    ]
})
export class AppModule {
}
