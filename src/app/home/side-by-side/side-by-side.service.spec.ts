import { TestBed } from '@angular/core/testing';

import { SideBySideService } from './side-by-side.service';

describe('SideBySideService', () => {
  let service: SideBySideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideBySideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
