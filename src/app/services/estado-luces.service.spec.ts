import { TestBed } from '@angular/core/testing';

import { EstadoLucesService } from './estado-luces.service';

describe('EstadoLucesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstadoLucesService = TestBed.get(EstadoLucesService);
    expect(service).toBeTruthy();
  });
});
