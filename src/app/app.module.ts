import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiService } from "./api-service";
import { HttpModule } from "@angular/http";
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule, routingComponents } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents
  ],
  imports: [
    BrowserModule, HttpModule, AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }