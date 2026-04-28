import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioListComponent } from './usuarios/components/usuario-list/usuario-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,UsuarioListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parcial-misw4104';
}
