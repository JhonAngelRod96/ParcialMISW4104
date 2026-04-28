import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuario-list.component.html',
  styleUrl: './usuario-list.component.css'
})
export class UsuarioListComponent {
      // instanciar modelo Director en nueva variable
    usuario: Usuario[] = [];

    constructor(private usuarioService: UsuarioService) {}

    ngOnInit(): void {
      this.loadUsers();
    }

    // Consumir API con información de los directores
    loadUsers() {
      this.usuarioService.getUsuarios()
        .subscribe(data => {
          this.usuario = data;
        });
    }

}
