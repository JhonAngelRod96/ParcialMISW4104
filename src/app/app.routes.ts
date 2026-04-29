import { Routes } from '@angular/router';
import { UsuarioListComponent } from './usuarios/components/usuario-list/usuario-list.component';
import { RepositorioListComponent } from './repositorios/components/repositorio-list/repositorio-list.component';
import { RepositorioDetailComponent } from './repositorios/components/repositorio-detail/repositorio-detail.component';

export const routes: Routes = [
    { path: 'usuarios', component: UsuarioListComponent },
    { path: 'inicio', component: UsuarioListComponent },
    { path: '', component: UsuarioListComponent },
    { path: 'repositorios', component: RepositorioListComponent},
    { path: 'repositorios/:id',component: RepositorioDetailComponent}
];
