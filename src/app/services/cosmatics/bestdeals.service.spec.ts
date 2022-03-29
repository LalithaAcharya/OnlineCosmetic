import { TestBed } from '@angular/core/testing';

import { BestdealsService } from './bestdeals.service';

describe('BestdealsService', () => {
  let service: BestdealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestdealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
