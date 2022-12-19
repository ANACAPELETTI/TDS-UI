import { TestBed } from '@angular/core/testing';

import { CriarTrabalhoService } from './criar-trabalho.service';

describe('CriarTrabalhoService', () => {
  let service: CriarTrabalhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriarTrabalhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
