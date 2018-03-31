import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnotifyNotificationComponent } from './snotify-notification.component';

describe('SnotifyNotificationComponent', () => {
  let component: SnotifyNotificationComponent;
  let fixture: ComponentFixture<SnotifyNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SnotifyNotificationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnotifyNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
