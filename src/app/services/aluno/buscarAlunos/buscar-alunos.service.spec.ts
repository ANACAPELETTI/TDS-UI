import { TestBed } from '@angular/core/testing';

import { BuscarAlunosService } from './buscar-alunos.service';

describe('BuscarAlunosService', () => {
  let service: BuscarAlunosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarAlunosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
