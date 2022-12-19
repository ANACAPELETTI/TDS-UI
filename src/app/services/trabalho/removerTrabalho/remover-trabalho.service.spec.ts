import { TestBed } from '@angular/core/testing';

import { RemoverTrabalhoService } from './remover-trabalho.service';

describe('RemoverTrabalhoService', () => {
  let service: RemoverTrabalhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoverTrabalhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
