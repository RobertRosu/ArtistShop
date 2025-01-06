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

  public recuperarTodos(): Observable<Articulo[]>{
    // Convierte el json en un array de objetos `Articulo`
    return this.http.get<any[]>('http://localhost/ArtistShop_API/recuperarTodos.php').pipe(
      map(data => data.map(item => new Articulo(item.id, item.nombre, item.descripcion, item.precio, item.imagen)))
    );
  }

  public seleccionar(id: number): Observable<Articulo>{
    return this.http.get<any>(`http://localhost/ArtistShop_API/seleccionar.php?id=${id}`).pipe(
      map(data => {
        const item = data[0]
        return new Articulo(item.id, item.nombre, item.descripcion, item.precio, item.imagen)
      }))
  }

  public baja(id: number){
    return this.http.delete(`http://localhost/ArtistShop_API/baja.php?id=${id}`)
  }
}
