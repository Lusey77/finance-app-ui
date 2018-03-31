import { Component, OnDestroy, OnInit } from '@angular/core';
import { INotificationModel, NotificationSeverity } from '../i.notification.model';
import { NotificationService } from '../notification.service';
import { Subscription } from 'rxjs/Subscription';
import { SnotifyPosition, SnotifyService, SnotifyToastConfig } from 'ng-snotify';

@Component({
  selector: 'ls-snotify-notification',
  template: `<ng-snotify></ng-snotify>`
})
export class SnotifyNotificationComponent implements OnInit, OnDestroy {
  private notificationSubscription: Subscription;
  private clearNotificationSubscription: Subscription;
  public snotifyConfig: SnotifyToastConfig;

  defaultTimeout: number = 5000;

  constructor(private notificationService: NotificationService,
              private snotifyService: SnotifyService) {
  }

  ngOnInit() {
    this.snotifyConfig = {
      pauseOnHover: true,
      position: SnotifyPosition.rightBottom
    };
    this.subscribeToEvents();
  }

  ngOnDestroy() {
    this.unsubscribeToEvents();
  }

  subscribeToEvents() {
    this.notificationSubscription = this.notificationService.notificationEvent
      .subscribe((model: INotificationModel) => {
        this.pushNotification(model);
      });

    this.clearNotificationSubscription = this.notificationService.clearNotificationEvent
      .subscribe(() => {
        this.snotifyService.clear();
      });
  }

  unsubscribeToEvents() {
    this.notificationSubscription.unsubscribe();
    this.clearNotificationSubscription.unsubscribe();
  }

  private pushNotification(model: INotificationModel): void {
    this.snotifyConfig.timeout = model.isPermanent ? 0 : this.defaultTimeout;
    switch (model.severity) {
      case NotificationSeverity.Success:
        this.snotifyService.success(model.message, model.title, this.snotifyConfig);
        break;
      case NotificationSeverity.Warning:
        this.snotifyService.warning(model.message, model.title, this.snotifyConfig);
        break;
      case NotificationSeverity.Info:
        this.snotifyService.info(model.message, model.title, this.snotifyConfig);
        break;
      case NotificationSeverity.Error:
        this.snotifyService.error(model.message, model.title, this.snotifyConfig);
        break;
    }
  }
}
