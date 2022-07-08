import { TestBed } from '@angular/core/testing';

import { ExitTypeService } from './exit-type.service';

describe('ExitTypeService', () => {
  let service: ExitTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExitTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
