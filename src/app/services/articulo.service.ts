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

  public create(articulo:any){
    if(articulo.cli_codigo){
      //Actualiza los datos
      return this.http.put(this.URL+`/Articulo/update`,articulo);
    }else{
    // Crea Registro nuevo
      return this.http.post(this.URL+`/Articulo/create`,articulo);
    }
  }

  public getArticuloById(id: number): Observable<any> {
    return this.http.get(`${this.URL}/Articulo/find/` + id);
  }

  public crearArticulo(data: Articulo,idArticulo): Observable<any> {
    if(!data.art_id){
      console.log('creacion')
      return this.http.post<Articulo>(`${this.URL}/articulo/create`, data);
    }else{
      console.log('modifcacion')
      return this.http.put<Articulo[]>(`${this.URL}/articulo/update/`, data);
    }
  }

  public actualizarArticulo(data: Observable<Articulo>, idArticulo: number ): Observable<any> {
    return this.http.put<Articulo[]>(`${this.URL}/articulo/update/${idArticulo}`, data);
  }
/*
  public eliminarArticulo(id: Observable<Articulo[]>) {
    return this.http.delete<Articulo[]>(`${this.URL}/Articulo/remove/` + id);
  }*/
  public delete(id: Observable<Articulo[]>) {
    return this.http.delete<Articulo[]>(`${this.URL}/articulo/remove/` + id);
  }


}
