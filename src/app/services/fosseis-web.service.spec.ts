import { TestBed, inject } from '@angular/core/testing';

import { FosseisWebService } from './fosseis-web.service';

describe('FosseisWebService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FosseisWebService]
    });
  });

  it('should be created', inject([FosseisWebService], (service: FosseisWebService) => {
    expect(service).toBeTruthy();
  }));
});
