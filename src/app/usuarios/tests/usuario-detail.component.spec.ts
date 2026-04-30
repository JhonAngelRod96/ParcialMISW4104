import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDetailComponent } from '../components/usuario-detail/usuario-detail.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

describe('UsuarioDetailComponent', () => {
  let component: UsuarioDetailComponent;
  let fixture: ComponentFixture<UsuarioDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioDetailComponent],
      providers: [
        provideRouter([]),
        provideHttpClient()
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuarioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user data', () => {
    component.usuario = {
      id: 1,
      username: 'user1',
      name: 'User One',
      email: 'user1@mail.com',
      avatarUrl: 'https://i.pravatar.cc/150?img=1',
      role: 'admin',
      location: 'Bogotá',
      repoIds: [101, 102]
    };

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('User One');
    expect(compiled.textContent).toContain('user1@mail.com');
  });

});
