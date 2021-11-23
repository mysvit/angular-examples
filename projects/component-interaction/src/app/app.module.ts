import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ServiceParentComponent} from './service-interaction/service-parent/service-parent.component';
import {ServiceChildComponent} from './service-interaction/service-child/service-child.component';
import {FormsModule} from '@angular/forms';
import {IoParentComponent} from './io-interaction/io-parent/io-parent.component';
import {IoChildComponent} from './io-interaction/io-child/io-child.component';
import {VcParentComponent} from './vc-interaction/vc-parent/vc-parent.component';
import {VcChildComponent} from './vc-interaction/vc-child/vc-child.component'

@NgModule({
    declarations: [
        AppComponent,
        ServiceParentComponent,
        ServiceChildComponent,
        IoParentComponent,
        IoChildComponent,
        VcParentComponent,
        VcChildComponent
    ],
    imports: [
        BrowserModule, FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
