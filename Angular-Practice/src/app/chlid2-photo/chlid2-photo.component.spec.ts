import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chlid2PhotoComponent } from './chlid2-photo.component';

describe('Chlid2PhotoComponent', () => {
  let component: Chlid2PhotoComponent;
  let fixture: ComponentFixture<Chlid2PhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chlid2PhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chlid2PhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
