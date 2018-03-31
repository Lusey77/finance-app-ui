import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyNotificationComponent } from './notify-notification.component';

describe('NotifyNotificationComponent', () => {
  let component: NotifyNotificationComponent;
  let fixture: ComponentFixture<NotifyNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotifyNotificationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
