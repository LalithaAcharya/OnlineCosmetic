import { TestBed } from '@angular/core/testing';

import { LipsService } from './lips.service';

describe('LipsService', () => {
  let service: LipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
