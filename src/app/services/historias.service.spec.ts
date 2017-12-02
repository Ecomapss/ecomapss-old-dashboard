import { TestBed, inject } from '@angular/core/testing';

import { HistoriasService } from './historias.service';

describe('HistoriasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistoriasService]
    });
  });

  it('should be created', inject([HistoriasService], (service: HistoriasService) => {
    expect(service).toBeTruthy();
  }));
});
