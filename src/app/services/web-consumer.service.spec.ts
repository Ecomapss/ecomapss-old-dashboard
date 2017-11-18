import { TestBed, inject } from '@angular/core/testing';

import { WebConsumerService } from './web-consumer.service';

describe('WebConsumerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebConsumerService]
    });
  });

  it('should be created', inject([WebConsumerService], (service: WebConsumerService) => {
    expect(service).toBeTruthy();
  }));
});
