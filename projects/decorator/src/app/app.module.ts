import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrackChangesComponent } from './track-changes/track-changes.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackChangesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
