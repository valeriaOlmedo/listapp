import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Articulo } from '../pages/interfaces/Articulo';

@Injectable({
  providedIn: 'root',
})
export class ArticuloService {
  URL = environment.url;

  constructor(private http: HttpClient) {}

  public listArticulos(): Observable<any> {
    return this.http.get(`${this.URL}/Articulo`);
  }

  public filtrarArticulo(data: String): Observable<any> {
    return this.http.get(`${this.URL}/Articulo-filter/` + data);
  }

  public getArticuloById(id: number): Observable<any> {
    return this.http.get(`${this.URL}/Articulo/find/` + id);
  }

  public crearArticulo(data: Observable<Articulo[]>): Observable<any> {
    return this.http.post<Articulo[]>(`${this.URL}/Articulo/create`, data);
  }

  public actualizarArticulo(data: Observable<Articulo[]>): Observable<any> {
    return this.http.put<Articulo[]>(`${this.URL}/Articulo/update`, data);
  }
/*
  public eliminarArticulo(id: Observable<Articulo[]>) {
    return this.http.delete<Articulo[]>(`${this.URL}/Articulo/remove/` + id);
  }*/
  public delete(id: Observable<Articulo[]>) {
    return this.http.delete<Articulo[]>(`${this.URL}/articulo/remove/` + id);
  }


}
