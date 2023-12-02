import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryCardsComponent } from './delivery-cards.component';

describe('DeliveryCardsComponent', () => {
  let component: DeliveryCardsComponent;
  let fixture: ComponentFixture<DeliveryCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryCardsComponent]
    });
    fixture = TestBed.createComponent(DeliveryCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
