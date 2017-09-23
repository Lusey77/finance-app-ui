import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ApiService } from "./api-service";
import { HttpModule } from "@angular/http";
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule, routingComponents } from "./app.routing";
import { DialogModule, DropdownModule } from "primeng/primeng";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    LoadingComponent
  ],
  imports: [
    BrowserModule, HttpModule, AppRoutingModule, DialogModule, BrowserAnimationsModule, DropdownModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
