import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteProductListComponent } from './route-product-list.component';

describe('RouteProductListComponent', () => {
  let component: RouteProductListComponent;
  let fixture: ComponentFixture<RouteProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
