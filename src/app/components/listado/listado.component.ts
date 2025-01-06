import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/model/Articulo';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit{
  articulos!: Articulo[]
  constructor(private _articulosService: ArticulosService){}

  ngOnInit(): void {
    this.recuperarTodos()
  }

  recuperarTodos(){
    this._articulosService.recuperarTodos().subscribe((data: Articulo[]) => {
      this.articulos = data
    })
  }

  baja(id: number){
    this._articulosService.baja(id).subscribe((data: any) => {
      alert('product deleted')
      this.recuperarTodos()
    })
  }

  getId(item: any): number {
    return item.id;
  }
}
