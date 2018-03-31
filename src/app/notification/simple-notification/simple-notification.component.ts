// import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
// import {INotificationModel} from '../i.notification.model';
// import {NotificationService} from '../notification.service';
// import {Subscription} from 'rxjs/Subscription';
// import {Ng2NotifyService} from 'ng2-notify/notify';
//
// interface Toast {
//   message?: string;
//   delay?: number;
//   corner?: string;
// }
//
// @Component({
//   selector: 'luse-simple-notification',
//   template: `<ng2-notify #ngNotify></ng2-notify>`
// })
// export class SimpleNotificationComponent implements OnInit, OnDestroy {
//   @ViewChild('ngNotify') ngNotify;
//   private notificationSubscription: Subscription;
//   private clearNotificationSubscription: Subscription;
//
//   defaultTimeout: number = 5000;
//
//   constructor(private notificationService: NotificationService,
//               private notifyService: Ng2NotifyService) { }
//
//   ngOnInit() {
//     this.notifyService.config({
//       corner: 'right-bottom'
//     });
//     this.subscribeToEvents();
//   }
//
//   ngOnDestroy() {
//     this.unsubscribeToEvents();
//   }
//
//   subscribeToEvents() {
//     this.notificationSubscription = this.notificationService.notificationEvent
//       .subscribe((model: INotificationModel) => {
//         const notification = this.convertToNotification(model);
//         this.notifyService.show(model.severity, notification);
//       });
//
//     this.clearNotificationSubscription = this.notificationService.clearNotificationEvent
//       .subscribe(() => {
//         this.ngNotify.init();
//       });
//   }
//
//   unsubscribeToEvents() {
//     this.notificationSubscription.unsubscribe();
//     this.clearNotificationSubscription.unsubscribe();
//   }
//
//   private convertToNotification(model: INotificationModel): Toast {
//     return {
//       message: model.message,
//       delay: model.isPermanent ? 0 : this.defaultTimeout
//     };
//   }
// }
