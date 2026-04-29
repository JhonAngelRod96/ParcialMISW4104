import { Component } from '@angular/core';
import { Repositorio } from '../../models/repositorio.model';
import { RepositorioService } from '../../services/repositorio.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repositorio-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './repositorio-list.component.html',
  styleUrl: './repositorio-list.component.css'
})
export class RepositorioListComponent {
    repositorios: Repositorio[] = [];

    constructor(private repoService: RepositorioService) {}

    ngOnInit(): void {
      this.loadRepo();
    }

    // Consumir API con información de los repositorios
    loadRepo() {
      this.repoService.getRepositorios()
        .subscribe(data => {
          this.repositorios = data;
        });
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
