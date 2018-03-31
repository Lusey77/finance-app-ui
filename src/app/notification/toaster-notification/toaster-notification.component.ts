import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NotificationService } from '../notification.service';
import { ToasterService, ToasterConfig, BodyOutputType, Toast } from 'angular2-toaster';
import { INotificationModel } from '../i.notification.model';

@Component({
  selector: 'ls-toastr-notification',
  template: `<toaster-container [toasterconfig]="toastrConfig"></toaster-container>`,
})
export class ToastrNotificationComponent implements OnInit, OnDestroy {
  private notificationSubscription: Subscription;
  private clearNotificationSubscription: Subscription;
  public toastrConfig: ToasterConfig;

  defaultTimeout: number = 5000;

  constructor(private notificationService: NotificationService,
              private toastrService: ToasterService) {
  }

  ngOnInit() {
    this.toastrConfig = new ToasterConfig({
      bodyOutputType: BodyOutputType.TrustedHtml,
      positionClass: 'toast-bottom-right'
    });
    this.subscribeToEvents();
  }

  ngOnDestroy() {
    this.unsubscribeToEvents();
  }

  subscribeToEvents() {
    this.notificationSubscription = this.notificationService.notificationEvent
      .subscribe((model: INotificationModel) => {
        const notification = this.convertToToast(model);
        this.toastrService.pop(notification);
      });

    this.clearNotificationSubscription = this.notificationService.clearNotificationEvent
      .subscribe(() => {
        this.toastrService.clear();
      });
  }

  unsubscribeToEvents() {
    this.notificationSubscription.unsubscribe();
    this.clearNotificationSubscription.unsubscribe();
  }

  private convertToToast(model: INotificationModel): Toast {
    return {
      type: model.severity,
      title: model.title,
      body: model.message,
      timeout: model.isPermanent ? 0 : this.defaultTimeout
    };
  }
}
