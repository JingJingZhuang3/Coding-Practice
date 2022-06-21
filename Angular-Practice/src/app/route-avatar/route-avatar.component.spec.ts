import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAvatarComponent } from './route-avatar.component';

describe('RouteAvatarComponent', () => {
  let component: RouteAvatarComponent;
  let fixture: ComponentFixture<RouteAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
