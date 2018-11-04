import { TestBed, inject } from '@angular/core/testing';

import { AppHttpClientService } from './app-http-client.service';

describe('AppHttpClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppHttpClientService]
    });
  });

  it('should be created', inject([AppHttpClientService], (service: AppHttpClientService) => {
    expect(service).toBeTruthy();
  }));
});
