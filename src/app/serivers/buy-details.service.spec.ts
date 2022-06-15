import { TestBed } from '@angular/core/testing';

import { BuyDetailsService } from './buy-details.service';

describe('BuyDetailsService', () => {
  let service: BuyDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
