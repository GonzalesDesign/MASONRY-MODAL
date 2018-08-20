import { TestBed, inject } from '@angular/core/testing';

import { MasonryDataService } from './masonry-data.service';

describe('MasonryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MasonryDataService]
    });
  });

  it('should be created', inject([MasonryDataService], (service: MasonryDataService) => {
    expect(service).toBeTruthy();
  }));
});
