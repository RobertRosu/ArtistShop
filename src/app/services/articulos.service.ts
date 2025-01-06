import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Articulo } from '../model/Articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http: HttpClient) {}

  public recuperarTodos(){
    // Convierte el json en un array de objetos `Articulo`
    return this.http.get<any[]>('http://localhost/ArtistShop_API/recuperarTodos.php').pipe(
      map(data => data.map(item => new Articulo(item.id, item.nombre, item.precio, item.descripcion, item.imagen)))
    );
  }
}
