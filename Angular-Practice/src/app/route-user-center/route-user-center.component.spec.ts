import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteUserCenterComponent } from './route-user-center.component';

describe('RouteUserCenterComponent', () => {
  let component: RouteUserCenterComponent;
  let fixture: ComponentFixture<RouteUserCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteUserCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteUserCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
