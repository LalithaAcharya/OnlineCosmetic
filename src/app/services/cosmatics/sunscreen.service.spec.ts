import { TestBed } from '@angular/core/testing';

import { SunscreenService } from './sunscreen.service';

describe('SunscreenService', () => {
  let service: SunscreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SunscreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
