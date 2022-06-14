import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteProductDetailComponent } from './route-product-detail.component';

describe('RouteProductDetailComponent', () => {
  let component: RouteProductDetailComponent;
  let fixture: ComponentFixture<RouteProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteProductDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
