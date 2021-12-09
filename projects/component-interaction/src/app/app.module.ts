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
import {MatCheckboxModule} from '@angular/material/checkbox'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog'
import {MatButtonModule} from '@angular/material/button';
import {DialogParentComponent} from './dialog-interaction/dialog-parent/dialog-parent.component';
import {DialogDialogComponent} from './dialog-interaction/dialog-dialog/dialog-dialog.component'
import {MatInputModule} from '@angular/material/input';
import {InputInteractionComponent} from './input-interaction/input-interaction.component'

@NgModule({
    declarations: [
        AppComponent,
        ServiceParentComponent,
        ServiceChildComponent,
        IoParentComponent,
        IoChildComponent,
        VcParentComponent,
        VcChildComponent,
        DialogParentComponent,
        DialogDialogComponent,
        InputInteractionComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatCheckboxModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
