import { TestBed, inject } from '@angular/core/testing';

import { InsetosWebService } from './insetos-web.service';

describe('InsetosWebService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsetosWebService]
    });
  });

  it('should be created', inject([InsetosWebService], (service: InsetosWebService) => {
    expect(service).toBeTruthy();
  }));
});
