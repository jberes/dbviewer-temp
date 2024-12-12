import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AcmeAnalyticsServerService } from './acme-analytics-server.service';

describe('AcmeAnalyticsServerService', () => {
  let service: AcmeAnalyticsServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(AcmeAnalyticsServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
