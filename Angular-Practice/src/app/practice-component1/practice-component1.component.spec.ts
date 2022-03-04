import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeComponent1Component } from './practice-component1.component';

describe('PracticeComponent1Component', () => {
  let component: PracticeComponent1Component;
  let fixture: ComponentFixture<PracticeComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeComponent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
