import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chlid1ModifyComponent } from './chlid1-modify.component';

describe('Chlid1ModifyComponent', () => {
  let component: Chlid1ModifyComponent;
  let fixture: ComponentFixture<Chlid1ModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chlid1ModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chlid1ModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
