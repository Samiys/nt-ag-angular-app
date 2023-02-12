import { TestBed } from '@angular/core/testing';

import { DetailViewService } from './detail-view.service';

describe('DetailViewService', () => {
  let service: DetailViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
