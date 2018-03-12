import { TestBed, inject } from '@angular/core/testing';

import { BookTrackerErrorHandlerService } from './book-tracker-error-handler.service';

describe('BookTrackerErrorHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookTrackerErrorHandlerService]
    });
  });

  it('should be created', inject([BookTrackerErrorHandlerService], (service: BookTrackerErrorHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
