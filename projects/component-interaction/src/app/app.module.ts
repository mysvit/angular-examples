import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button'
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox'
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog'
import { MatIconModule } from '@angular/material/icon'
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { CreateComponentChildComponent } from './create-component-interaction/create-component-child/create-component-child.component'
import { CreateComponentParentComponent } from './create-component-interaction/create-component-parent/create-component-parent.component'
import { DialogDialogComponent } from './dialog-interaction/dialog-dialog/dialog-dialog.component'
import { DialogParentComponent } from './dialog-interaction/dialog-parent/dialog-parent.component'
import { InputInteractionComponent } from './input-interaction/input-interaction.component'
import { IoChildComponent } from './io-interaction/io-child/io-child.component'
import { IoParentComponent } from './io-interaction/io-parent/io-parent.component'
import { ServiceChildComponent } from './service-interaction/service-child/service-child.component'
import { ServiceParentComponent } from './service-interaction/service-parent/service-parent.component'
import { TemplateInteractionComponent } from './template-interaction/template-interaction.component'
import { VcChildComponent } from './vc-interaction/vc-child/vc-child.component'
import { VcParentComponent } from './vc-interaction/vc-parent/vc-parent.component'

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
        InputInteractionComponent,
        TemplateInteractionComponent,
        CreateComponentParentComponent,
        CreateComponentChildComponent
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
