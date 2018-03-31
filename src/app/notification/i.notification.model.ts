type NotificationSeverity = 'success' | 'info' | 'warning' | 'error';

const NotificationSeverity = {
  get Success(): NotificationSeverity {
    return 'success';
  },
  get Info(): NotificationSeverity {
    return 'info';
  },
  get Warning(): NotificationSeverity {
    return 'warning';
  },
  get Error(): NotificationSeverity {
    return 'error';
  }
};

export interface INotificationModel {
  title: string;
  message: string;
  severity?: NotificationSeverity;
  isPermanent?: boolean;
  lifetime?: number;
}

export { NotificationSeverity };
