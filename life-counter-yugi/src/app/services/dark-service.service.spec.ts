import { TestBed } from '@angular/core/testing';

import { DarkServiceService } from './dark-service.service';

describe('DarkServiceService', () => {
  let service: DarkServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
