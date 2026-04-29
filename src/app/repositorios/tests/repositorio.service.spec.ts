import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { RepositorioService } from '../services/repositorio.service';

describe('RepositorioService', () => {
  let service: RepositorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient() 
      ]
    });

    service = TestBed.inject(RepositorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});