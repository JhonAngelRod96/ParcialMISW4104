import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioListComponent } from '../components/usuario-list/usuario-list.component';
import { UsuarioService } from '../services/usuario.service';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('UsuarioListComponent', () => {
  let component: UsuarioListComponent;
  let fixture: ComponentFixture<UsuarioListComponent>;

  const mockUsuarioService = {
    getUsuarios: () => of([
      {
        id: 1,
        username: 'user1',
        name: 'User One',
        email: 'user1@mail.com',
        avatarUrl: '',
        role: 'admin',
        location: 'Bogotá',
        repoIds: [101, 102]
      }
    ])
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioListComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        { provide: UsuarioService, useValue: mockUsuarioService } 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load users', () => {
    expect(component.usuarios.length).toBeGreaterThan(0);
  });

});