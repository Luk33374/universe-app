import { TestBed } from '@angular/core/testing';

import { OrbitsService } from './orbits.service';

describe('OrbitsService', () => {
  let service: OrbitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrbitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
