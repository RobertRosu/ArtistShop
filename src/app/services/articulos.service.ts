import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Articulo } from '../model/Articulo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http: HttpClient) {}
  baseURL: string = 'http://localhost/controllers/'

  public recuperarTodos(): Observable<Articulo[]>{
    // Convierte el json en un array de objetos `Articulo`
    return this.http.get<any[]>(`${this.baseURL}recuperarTodos.php`).pipe(
      map(data => data.map(item => new Articulo(item.id, item.nombre, item.descripcion, item.precio, item.imagen)))
    );
  }

  public seleccionar(id: number): Observable<Articulo>{
    return this.http.get<any>(`${this.baseURL}seleccionar.php?id=${id}`).pipe(
      map(data => {
        const item = data[0]
        return new Articulo(item.id, item.nombre, item.descripcion, item.precio, item.imagen)
      }))
  }

  public modificar(datos: any){
    return this.http.post(`${this.baseURL}modificacion.php?id=${datos.id}`, datos)
  }

  public nuevo(datos: any){
    return this.http.post('http://localhost/ArtistShop_API/alta.php', datos)
  }

  public baja(id: number){
    return this.http.delete(`${this.baseURL}baja.php?id=${id}`)
  }
}
