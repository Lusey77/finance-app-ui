import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiService } from './api-service';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents
  ],
  imports: [
    BrowserModule, HttpModule, AppRoutingModule, RouterModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent, RouterModule]
})
export class AppModule { }
