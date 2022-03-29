import { TestBed } from '@angular/core/testing';

import { MoisturizerService } from './moisturizer.service';

describe('MoisturizerService', () => {
  let service: MoisturizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoisturizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
