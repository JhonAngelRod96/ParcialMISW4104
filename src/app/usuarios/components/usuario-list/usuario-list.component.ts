import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { FormsModule } from '@angular/forms';
import { UsuarioDetailComponent } from '../usuario-detail/usuario-detail.component';

@Component({
  selector: 'app-usuario-list',
  standalone: true,
  imports: [CommonModule,FormsModule,UsuarioDetailComponent],
  templateUrl: './usuario-list.component.html',
  styleUrl: './usuario-list.component.css'
})
export class UsuarioListComponent {
      // instanciar modelo Director en nueva variable
    usuarios: Usuario[] = [];

    usuarioSeleccionado!: Usuario;

    @Output() usuarioSeleccionadoEvent = new EventEmitter<Usuario>();

    constructor(private usuarioService: UsuarioService) {}

    ngOnInit(): void {
      this.loadUsers();
    }

    // Consumir API con información de los usuarios
    loadUsers() {
      this.usuarioService.getUsuarios()
        .subscribe(data => {
          this.usuarios = data;
        });
    }

    seleccionarUsuario(usuario: Usuario) {
      this.usuarioSeleccionado = usuario;
      this.usuarioSeleccionadoEvent.emit(usuario);
    }

}
