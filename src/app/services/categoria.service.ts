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

  public getCategoriaById(codigo: number): Observable<any> {
    return this.http.get(`${this.URL}/categoria/find/` + codigo);
  }



  public crearCategoria(data: Observable<Categoria[]>): Observable<any> {
    return this.http.post<Categoria[]>(`${this.URL}/categoria/create`, data);
  }

  public actualizarCategoria(data: Observable<Categoria[]>): Observable<any> {
    return this.http.put<Categoria[]>(`${this.URL}/categoria/update`, data);
  }

  public delete(id: Observable<Categoria[]>) {
    return this.http.delete<Categoria[]>(`${this.URL}/categoria/remove/` + id);
  }



/*

  public eliminarCategoria(id: Observable<Categoria[]>) {
    return this.http.delete<Categoria[]>(`${this.URL}/categoria/remove/` + id);
  }

  public delete(codigo: String) {
    return this.http.delete(this.URL + `/categoria/remove/${codigo}`);
  }
*/
}
