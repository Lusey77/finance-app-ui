import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrNotificationComponent } from './toaster-notification.component';

describe('ToastrNotificationComponent', () => {
  let component: ToastrNotificationComponent;
  let fixture: ComponentFixture<ToastrNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToastrNotificationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastrNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
