import { TestBed, inject } from '@angular/core/testing';

import { PlainLoggerService } from './plain-logger.service';

describe('PlainLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlainLoggerService]
    });
  });

  it('should be created', inject([PlainLoggerService], (service: PlainLoggerService) => {
    expect(service).toBeTruthy();
  }));
});
