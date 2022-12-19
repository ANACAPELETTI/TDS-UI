import { TestBed } from '@angular/core/testing';

import { BuscarTrabalhosService } from './buscar-trabalhos.service';

describe('BuscarTrabalhosService', () => {
  let service: BuscarTrabalhosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarTrabalhosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
