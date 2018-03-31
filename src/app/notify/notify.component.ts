import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NotifyService } from './notify.service';
import { Notifycation } from './notify.interface';
import { NotificationSeverity } from '../notification/i.notification.model';
import { trigger, style, animate, transition } from '@angular/animations';
import { NotifycationConfig } from './notify-config';

@Component({
  selector: 'ls-notify',
  template: `
    <div [@animate]="animation" class="ls-notification" [ngClass]="class" *ngIf="notification" (click)="handleClick()" #notification>
      <span class="ls-message" [innerHTML]="message"></span>
      <div class="ls-dismiss" *ngIf="config.showCloseIcon" (click)="clearNotification(true)">
        <span class="ls-dismiss-icon">&times;</span>
      </div>
    </div>
  `,
  styleUrls: ['./notify.component.css'],
  animations: [
    trigger('animate', [
      transition('void -> fade', [
        style({opacity: 0}),
        animate(500, style({opacity: 1}))
      ]),
      transition('fade -> void', [
        style({opacity: 1}),
        animate(500, style({opacity: 0}))
      ]),
      transition('void -> slide', [
        style({opacity: 1, transform: 'translateY(100%)'}),
        animate('500ms ease-in', style({transform: 'translateY(0)'}))
      ]),
      transition('slide -> void', [
        style({opacity: 1, transform: 'translateY(0)'}),
        animate('500ms ease-out', style({transform: 'translateY(100%)'}))
      ])
    ])
  ]
})
export class NotifyComponent implements OnInit {
  @Input() config: NotifycationConfig = new NotifycationConfig();
  private class: string;
  private animation: string;
  private message: string;
  private timeout: any;
  private timer: number;
  private notification: boolean;
  private severityClass: Map<NotificationSeverity, string>;

  constructor(private notifyService: NotifyService,
              private cd: ChangeDetectorRef) {
    this.notification = false;
    this.severityClass = new Map<NotificationSeverity, string>([
      [NotificationSeverity.Success, 'ls-success'],
      [NotificationSeverity.Warning, 'ls-warn'],
      [NotificationSeverity.Info, 'ls-info'],
      [NotificationSeverity.Error, 'ls-error']
    ]);
  }

  ngOnInit() {
    this.subscribeToNotifyService();
  }

  subscribeToNotifyService() {
    this.notifyService.pushNotification.subscribe((message: Notifycation) => {
      this.show(message);
    });

    this.notifyService.clearNotification.subscribe(() => {
      this.clearNotification(true);
    });
  }

  show(notification: Notifycation) {
    if (this.notification) {
      this.clearNotification(false);
    }

    this.buildNotification(notification);
  }

  clearNotification(animateTransition: boolean) {
    if (!animateTransition) {
      this.animation = 'transitioning';
      this.cd.detectChanges();
    }
    this.notification = false;
    this.cd.detectChanges();
    clearTimeout(this.timeout);
  }

  buildNotification(notification: Notifycation) {
    this.setNotificationAnimation();
    this.setNotificationClasses(notification);
    this.setNotificationTimer(notification);
    this.message = notification.message;
    this.notification = true;
  }

  setNotificationAnimation() {
    this.animation = this.config.animation;
  }

  setNotificationClasses(notification: Notifycation) {
    this.class = `ls-notification ${this.severityClass.get(notification.severity)} ls-${this.config.position}`;
    this.class = this.config.clickToDismiss ? `${this.class} ls-clickable` : this.class;
    this.class = this.config.class ? `${this.class} ${this.config.class}` : this.class;
  }

  setNotificationTimer(notification: Notifycation) {
    this.timer = notification.lifetime ? notification.lifetime : this.config.timeout;
    this.timeout = setTimeout(() => {
      this.clearNotification(true);
    }, this.timer);
  }

  handleClick() {
    if (this.config.clickToDismiss) {
      this.clearNotification(true);
    }
  }
}
