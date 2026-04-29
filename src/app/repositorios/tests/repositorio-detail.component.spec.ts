import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorioDetailComponent } from '../components/repositorio-detail/repositorio-detail.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

describe('RepositorioDetailComponent', () => {
  let component: RepositorioDetailComponent;
  let fixture: ComponentFixture<RepositorioDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositorioDetailComponent],
      providers: [
        provideRouter([]),
        provideHttpClient()
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepositorioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display repository data', () => {
    component.repositorio = {
      id: 1,
      name: 'repo-test',
      description: 'test desc',
      language: 'TypeScript',
      stars: '100',
      createdAt: '2025-01-01',
      ownerId: 1
    };

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('repo-test');
    expect(compiled.textContent).toContain('TypeScript');
  });

});
