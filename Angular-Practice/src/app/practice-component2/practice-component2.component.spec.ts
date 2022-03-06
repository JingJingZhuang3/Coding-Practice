import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeComponent2Component } from './practice-component2.component';

describe('PracticeComponent2Component', () => {
  let component: PracticeComponent2Component;
  let fixture: ComponentFixture<PracticeComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeComponent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
