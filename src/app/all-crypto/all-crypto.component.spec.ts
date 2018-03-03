import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCryptoComponent } from './all-crypto.component';

describe('AllCryptoComponent', () => {
  let component: AllCryptoComponent;
  let fixture: ComponentFixture<AllCryptoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCryptoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
