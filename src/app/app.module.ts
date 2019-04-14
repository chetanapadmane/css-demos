import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxShodowstyleComponent } from './box-shodowstyle/box-shodowstyle.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxShodowstyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
