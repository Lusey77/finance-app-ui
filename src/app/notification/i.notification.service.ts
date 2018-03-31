import { INotificationModel } from './i.notification.model';

export interface INotificationService {
  notifySuccess(notification: INotificationModel): void;

  notifyWarning(notification: INotificationModel): void;

  notifyInfo(notification: INotificationModel): void;

  notifyError(notification: INotificationModel): void;

  clearNotifications(): void;
}
