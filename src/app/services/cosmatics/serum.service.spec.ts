import { TestBed } from '@angular/core/testing';

import { SerumService } from './serum.service';

describe('SerumService', () => {
  let service: SerumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
