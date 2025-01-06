import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/model/Articulo';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-lista-general',
  templateUrl: './lista-general.component.html',
  styleUrls: ['./lista-general.component.scss']
})
export class ListaGeneralComponent implements OnInit{
  articulos!: Articulo[]
  constructor(private _articulosService: ArticulosService){}

  ngOnInit(): void{
    this._articulosService.recuperarTodos().subscribe((data: Articulo[]) => {
      this.articulos = data
      console.log(this.articulos)
    })
  }

  getId(item: any): number {
    return item.id; // Usa el ID como identificador único
  }

}
