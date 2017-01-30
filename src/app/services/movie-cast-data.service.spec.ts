/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovieCastDataService } from './movie-cast-data.service';

describe('MovieCastDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieCastDataService]
    });
  });

  it('should ...', inject([MovieCastDataService], (service: MovieCastDataService) => {
    expect(service).toBeTruthy();
  }));
});
