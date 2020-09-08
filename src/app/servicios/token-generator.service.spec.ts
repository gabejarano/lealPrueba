import { TestBed } from '@angular/core/testing';

import { TokenGeneratorService } from './token-generator.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TokenGeneratorService', () => {
  let service: TokenGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(TokenGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
