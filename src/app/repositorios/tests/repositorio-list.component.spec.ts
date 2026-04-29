import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepositorioListComponent } from '../components/repositorio-list/repositorio-list.component';
import { RepositorioService } from '../services/repositorio.service';
import { of } from 'rxjs';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

describe('RepositorioListComponent', () => {
  let component: RepositorioListComponent;
  let fixture: ComponentFixture<RepositorioListComponent>;

  const mockRepoService = {
    getRepositorios: () => of([
      {
        id: 1,
        name: 'repo-test',
        description: 'test desc',
        language: 'TypeScript',
        stars: 10,
        createdAt: '2025-01-01',
        ownerId: 1
      }
    ])
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositorioListComponent],
      providers: [
        { provide: RepositorioService, useValue: mockRepoService },
        provideRouter([]),
        provideHttpClient()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepositorioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load repositories', () => {
    expect(component.repositorios.length).toBeGreaterThan(0);
  });

});