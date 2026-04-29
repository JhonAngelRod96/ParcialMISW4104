import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Repositorio } from '../models/repositorio.model';

@Injectable({
  providedIn: 'root'
})
export class RepositorioService {

    private apiUrl = environment.apiUrl + 'repositories.json';
  
    constructor(private http: HttpClient) {}
  
    getRepositorios(): Observable<Repositorio[]> {
      return this.http.get<Repositorio[]>(this.apiUrl);
    }
}
