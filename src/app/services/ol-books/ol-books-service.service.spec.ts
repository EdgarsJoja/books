import { TestBed, inject } from '@angular/core/testing';

import { OlBooksService } from './ol-books-service.service';

describe('OlBooksServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OlBooksService]
    });
  });

  it('should be created', inject([OlBooksService], (service: OlBooksService) => {
    expect(service).toBeTruthy();
  }));
});
