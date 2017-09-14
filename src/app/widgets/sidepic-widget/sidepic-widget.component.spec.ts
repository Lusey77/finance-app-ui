import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidepicWidgetComponent } from './sidepic-widget.component';

describe('SidepicWidgetComponent', () => {
  let component: SidepicWidgetComponent;
  let fixture: ComponentFixture<SidepicWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidepicWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidepicWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
