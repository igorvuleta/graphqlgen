import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersdetailsComponent } from './suppliersdetails.component';

describe('SuppliersdetailsComponent', () => {
  let component: SuppliersdetailsComponent;
  let fixture: ComponentFixture<SuppliersdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
