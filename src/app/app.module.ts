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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { SelectAccountComponent } from './account/select-account/select-account.component';
import { DisplayAccountComponent } from './account/display-account/display-account.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavTitleComponent } from './nav-title/nav-title.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
// import { SimpleNotificationComponent } from './notification/simple-notification/simple-notification.component';
import { ToastrNotificationComponent } from './notification/toaster-notification/toaster-notification.component';
import { SnotifyNotificationComponent } from './notification/snotify-notification/snotify-notification.component';
import { NotifyNotificationComponent } from './notification/notify-notification/notify-notification.component';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { NotificationService } from './notification/notification.service';
import { NotifyComponent } from './notify/notify.component';
import { ButtonComponent } from './button/button.component';
import { NotifyService } from './notify/notify.service';
import { HexadecimalValueValidator } from './validators/hexadecimal-validator';
import { ValidationComponent } from './components/validation';
import { FormSelectComponent } from './components/select';
import { FormTextComponent } from './components/input';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    LoadingComponent,
    CreateAccountComponent,
    SelectAccountComponent,
    DisplayAccountComponent,
    NavbarComponent,
    NavTitleComponent,
    NavItemComponent,
    LoginComponent,
    // SimpleNotificationComponent,
    ToastrNotificationComponent,
    SnotifyNotificationComponent,
    NotifyNotificationComponent,
    NotifyComponent,
    ButtonComponent,
    HexadecimalValueValidator,
    ValidationComponent,
    FormSelectComponent,
    FormTextComponent
  ],
  imports: [
    BrowserModule, HttpModule, AppRoutingModule, DialogModule, BrowserAnimationsModule, DropdownModule, FormsModule, SnotifyModule,
    ButtonModule, DataTableModule, ChartModule, InputTextModule, ReactiveFormsModule, NgbCollapseModule, ToasterModule
  ],
  providers: [ApiService, NotificationService, ToasterService, SnotifyService, NotifyService, {
    provide: 'SnotifyToastConfig',
    useValue: ToastDefaults
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
