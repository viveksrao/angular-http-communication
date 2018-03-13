import { TestBed, inject } from '@angular/core/testing';

import { BooksResolverService } from './books-resolver.service';

describe('BooksResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksResolverService]
    });
  });

  it('should be created', inject([BooksResolverService], (service: BooksResolverService) => {
    expect(service).toBeTruthy();
  }));
});
