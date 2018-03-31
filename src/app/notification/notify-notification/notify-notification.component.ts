import { Component, OnDestroy, OnInit } from '@angular/core';
import { INotificationModel } from '../i.notification.model';
import { NotificationService } from '../notification.service';
import { Subscription } from 'rxjs/Subscription';
import { NotifyService } from '../../notify/notify.service';
import { Notifycation } from '../../notify/notify.interface';

@Component({
  selector: 'ls-notify-notification',
  template: `<ls-notify></ls-notify>`
})
export class NotifyNotificationComponent implements OnInit, OnDestroy {
  private notificationSubscription: Subscription;
  private clearNotificationSubscription: Subscription;

  defaultTimeout: number = 5000;

  constructor(private notificationService: NotificationService,
              private notifyService: NotifyService) {
  }

  ngOnInit() {
    this.subscribeToEvents();
  }

  ngOnDestroy() {
    this.unsubscribeToEvents();
  }

  subscribeToEvents() {
    this.notificationSubscription = this.notificationService.notificationEvent
      .subscribe((model: INotificationModel) => {
        const notification = this.convertToNotifycation(model);
        this.notifyService.push(notification);
      });

    this.clearNotificationSubscription = this.notificationService.clearNotificationEvent
      .subscribe(() => {
        this.notifyService.clear();
      });
  }

  unsubscribeToEvents() {
    this.notificationSubscription.unsubscribe();
    this.clearNotificationSubscription.unsubscribe();
  }

  convertToNotifycation(model: INotificationModel): Notifycation {
    return {
      title: model.title,
      message: model.message,
      severity: model.severity,
      isPermanent: model.isPermanent,
      lifetime: this.defaultTimeout
    };
  }

}
