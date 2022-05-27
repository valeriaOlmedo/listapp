import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lista_cab } from '../pages/interfaces/Lista_cab';

@Injectable({
  providedIn: 'root',
})
export class Lista_cabService {
  URL = environment.url;

  constructor(private http: HttpClient) {}

  public listLista_cab(): Observable<any> {
    return this.http.get(`${this.URL}/Lista_cab`);
  }

  public filtrarLista_cab(data: String): Observable<any> {
    return this.http.get(`${this.URL}/Lista_cab-filter` + data);
  }

  public getLista_cabById(id: number): Observable<any> {
    return this.http.get(`${this.URL}/Lista_cab/find/` + id);
  }

  public crearLista_cab(data: Observable<Lista_cab[]>): Observable<any> {
    return this.http.post<Lista_cab[]>(`${this.URL}/Lista_cab/create`, data);
  }

  public actualizarLista_cab(data: Observable<Lista_cab[]>): Observable<any> {
    return this.http.put<Lista_cab[]>(`${this.URL}/Lista_cab/update"`, data);
  }

  public eliminarLista_cab(id: Observable<Lista_cab[]>) {
    return this.http.delete<Lista_cab[]>(`${this.URL}/Lista_cab/remove/` + id);
  }
}
