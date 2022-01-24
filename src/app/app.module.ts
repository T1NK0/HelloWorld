import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPalComponent } from './my-pal/my-pal.component';
import { GeometriComponent } from './geometri/geometri.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPalComponent,
    GeometriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
