import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lista_det } from '../pages/interfaces/Lista_det';

@Injectable({
  providedIn: 'root',
})
export class Lista_detService {
  URL = environment.url;

  constructor(private http: HttpClient) {}

  public listLista_det(): Observable<any> {
    return this.http.get(`${this.URL}/lista_det/`);
  }



  public filtrarLista_det(data: String): Observable<any> {
    return this.http.get(`${this.URL}/Lista_det-filter` + data);
  }

  public getLista_detById(id: number): Observable<any> {
    return this.http.get(`${this.URL}/Lista_det/find/` + id);
  }

  public crearLista_det(data: Observable<Lista_det[]>): Observable<any> {
    return this.http.post<Lista_det[]>(`${this.URL}/Lista_det/create`, data);
  }

  public actualizarLista_det(data: Observable<Lista_det[]>): Observable<any> {
    return this.http.put<Lista_det[]>(`${this.URL}/Lista_det/update"`, data);
  }

  public eliminarLista_det(id: Observable<Lista_det[]>) {
    return this.http.delete<Lista_det[]>(`${this.URL}/Lista_det/remove/` + id);
  }
}
