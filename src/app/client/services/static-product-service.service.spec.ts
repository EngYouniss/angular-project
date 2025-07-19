import { TestBed } from '@angular/core/testing';

import { StaticProductServiceService } from './static-product-service.service';

describe('StaticProductServiceService', () => {
  let service: StaticProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
