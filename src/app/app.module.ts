import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ApiService } from './api-service';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import {
  ButtonModule, ChartModule, DataTableModule, DialogModule, DropdownModule,
  InputTextModule
} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './loading/loading.component';
import { FormsModule } from '@angular/forms';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { SelectAccountComponent } from './account/select-account/select-account.component';
import { DisplayAccountComponent } from './account/display-account/display-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    LoadingComponent,
    CreateAccountComponent,
    SelectAccountComponent,
    DisplayAccountComponent
  ],
  imports: [
    BrowserModule, HttpModule, AppRoutingModule, DialogModule, BrowserAnimationsModule, DropdownModule, FormsModule,
    ButtonModule, DataTableModule, ChartModule, InputTextModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
