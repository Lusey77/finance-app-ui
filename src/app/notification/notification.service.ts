import { Injectable } from '@angular/core';
import { INotificationService } from './i.notification.service';
import { INotificationModel, NotificationSeverity } from './i.notification.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ConsoleNotificationService implements INotificationService {
  notifySuccess(notification: INotificationModel) {
    console.log(`${notification.title}: ${notification.message}`);
  }

  notifyWarning(notification: INotificationModel) {
    console.warn(`${notification.title}: ${notification.message}`);
  }

  notifyInfo(notification: INotificationModel) {
    console.log(`${notification.title}: ${notification.message}`);
  }

  notifyError(notification: INotificationModel) {
    console.error(`${notification.title}: ${notification.message}`);
  }

  clearNotifications() {
    console.clear();
  }
}

@Injectable()
export class NotificationService implements INotificationService {
  public notificationEvent: Subject<INotificationModel> = new Subject<INotificationModel>();
  public clearNotificationEvent: Subject<any> = new Subject<any>();

  notifySuccess(notification: INotificationModel) {
    notification.severity = NotificationSeverity.Success;
    this.notificationEvent.next(notification);
  }

  notifyWarning(notification: INotificationModel) {
    notification.severity = NotificationSeverity.Warning;
    this.notificationEvent.next(notification);
  }

  notifyInfo(notification: INotificationModel) {
    notification.severity = NotificationSeverity.Info;
    this.notificationEvent.next(notification);
  }

  notifyError(notification: INotificationModel) {
    notification.severity = NotificationSeverity.Error;
    this.notificationEvent.next(notification);
  }

  clearNotifications() {
    this.clearNotificationEvent.next();
  }
}

