import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KiloPhotoComponent } from './kilo-photo/kilo-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    KiloPhotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
