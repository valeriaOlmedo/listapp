import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from '../pages/interfaces/Categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  URL = environment.url;

  constructor(private http: HttpClient) {}

  public listCategorias(): Observable<any> {
    return this.http.get(`${this.URL}/categoria`);
  }

  public filtrarCategoria(data: String): Observable<any> {
    return this.http.get(`${this.URL}/categoria-filter/` + data);
  }

  public getCategoriaById(id: number): Observable<any> {
    return this.http.get(`${this.URL}/categoria/find/` + id);
  }

  public crearCategoria(data: Observable<Categoria[]>): Observable<any> {
    return this.http.post<Categoria[]>(`${this.URL}/categoria/create`, data);
  }

  public actualizarCategoria(data: Observable<Categoria[]>): Observable<any> {
    return this.http.put<Categoria[]>(`${this.URL}/categoria/update`, data);
  }

  public eliminarCategoria(id: Observable<Categoria[]>) {
    return this.http.delete<Categoria[]>(`${this.URL}/categoria/remove/` + id);
  }
}
