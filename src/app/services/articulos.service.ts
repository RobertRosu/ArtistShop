import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http: HttpClient) { }

  recuperarTodos(){
    return this.http.get('http://localhost/ArtistShop_API/recuperarTodos.php')
  }
}
