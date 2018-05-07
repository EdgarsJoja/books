import { TestBed, inject } from '@angular/core/testing';

import { NytBooksService } from './nyt-books.service';

describe('NytBooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NytBooksService]
    });
  });

  it('should be created', inject([NytBooksService], (service: NytBooksService) => {
    expect(service).toBeTruthy();
  }));
});
