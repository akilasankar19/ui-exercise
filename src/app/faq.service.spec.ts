import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { FaqService } from './faq.service';

describe('FaqService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    providers: [FaqService]
  }));

  it('should be created', () => {
    const service: FaqService = TestBed.get(FaqService);
    expect(service).toBeTruthy();
  });
});
