import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteSecurityComponent } from './route-security.component';

describe('RouteSecurityComponent', () => {
  let component: RouteSecurityComponent;
  let fixture: ComponentFixture<RouteSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
