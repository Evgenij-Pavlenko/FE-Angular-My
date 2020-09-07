import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDateComponent } from './user-date/user-date.component';
import { UserShowComponent } from './user-show/user-show.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDateComponent,
    UserShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
