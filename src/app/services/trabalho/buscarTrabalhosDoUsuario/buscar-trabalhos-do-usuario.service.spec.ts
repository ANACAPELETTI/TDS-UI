import { TestBed } from '@angular/core/testing';

import { BuscarTrabalhosDoUsuarioService } from './buscar-trabalhos-do-usuario.service';

describe('BuscarTrabalhosDoUsuarioService', () => {
  let service: BuscarTrabalhosDoUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarTrabalhosDoUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
