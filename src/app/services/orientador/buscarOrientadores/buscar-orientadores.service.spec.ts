import { TestBed } from '@angular/core/testing';

import { BuscarOrientadoresService } from './buscar-orientadores.service';

describe('BuscarOrientadoresService', () => {
  let service: BuscarOrientadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarOrientadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
