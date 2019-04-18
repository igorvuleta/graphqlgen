import { TestBed } from '@angular/core/testing';

import { ProductDetailServiceService } from './product-detail-service.service';

describe('ProductDetailServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductDetailServiceService = TestBed.get(ProductDetailServiceService);
    expect(service).toBeTruthy();
  });
});
