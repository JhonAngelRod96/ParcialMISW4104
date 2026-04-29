import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent {

  @Input() usuario!: Usuario;

}