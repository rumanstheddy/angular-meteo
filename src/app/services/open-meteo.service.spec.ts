import { TestBed } from '@angular/core/testing';

import { OpenMeteoService } from './open-meteo.service';

describe('OpenMeteoServiceService', () => {
  let service: OpenMeteoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenMeteoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
