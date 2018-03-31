import { NotificationSeverity } from '../notification/i.notification.model';

export interface Notifycation {
  title?: string;
  message?: any;
  severity?: NotificationSeverity;
  isPermanent?: boolean;
  lifetime?: number;
}
