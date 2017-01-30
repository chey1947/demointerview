/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarddataService } from './carddata.service';

describe('CarddataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarddataService]
    });
  });

  it('should ...', inject([CarddataService], (service: CarddataService) => {
    expect(service).toBeTruthy();
  }));
});
