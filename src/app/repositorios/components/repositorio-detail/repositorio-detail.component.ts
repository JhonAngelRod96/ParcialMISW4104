import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { RepositorioService } from '../../services/repositorio.service';
import { Repositorio } from '../../models/repositorio.model';
import { Usuario } from '../../../usuarios/models/usuario.model';
import { UsuarioService } from '../../../usuarios/services/usuario.service';

@Component({
  selector: 'app-repositorio-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './repositorio-detail.component.html',
  styleUrl: './repositorio-detail.component.css'
})
export class RepositorioDetailComponent {
  repositorio!: Repositorio;
  usuario!: Usuario;

  constructor(
    private route: ActivatedRoute,
    private repoService: RepositorioService,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.loadRepo(id);
  }

    // Consumir API con información especifica del repositorio
  loadRepo(id: number) {
    this.repoService.getRepositorios().subscribe(repos => {
      this.repositorio = repos.find(r => r.id === id)!;

      this.usuarioService.getUsuarios().subscribe(users => {
        this.usuario = users.find(u => u.id === this.repositorio.ownerId)!;
      });
    });
  }

  volver() {
    this.router.navigate(['/repositorios']);
  }

    //Funcion de iconos de lenguaje
    getLogo(language: string): string {
      const logos: any = {
        typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        go: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
        rust: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/rust.svg',
        kotlin: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
        swift: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
        html: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        css: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        shell: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
        yaml: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yaml/yaml-original.svg',
        ruby: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',
        'c++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
        'c#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
      };

      return logos[language.toLowerCase()] 
        || 'https://cdn-icons-png.flaticon.com/512/919/919851.png';
    }

}
