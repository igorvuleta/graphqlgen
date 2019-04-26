import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersdetailComponent } from './ordersdetail.component';

describe('OrdersdetailComponent', () => {
  let component: OrdersdetailComponent;
  let fixture: ComponentFixture<OrdersdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
