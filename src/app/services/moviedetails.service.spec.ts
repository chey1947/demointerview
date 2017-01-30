/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MoviedetailsService } from './moviedetails.service';

describe('MoviedetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviedetailsService]
    });
  });

  it('should ...', inject([MoviedetailsService], (service: MoviedetailsService) => {
    expect(service).toBeTruthy();
  }));
});
