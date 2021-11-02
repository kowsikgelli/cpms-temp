import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationMobileViewComponent } from './notification-mobile-view.component';

describe('NotificationMobileViewComponent', () => {
  let component: NotificationMobileViewComponent;
  let fixture: ComponentFixture<NotificationMobileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationMobileViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationMobileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
