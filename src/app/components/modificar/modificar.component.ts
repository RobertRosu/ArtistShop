import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from 'src/app/model/Articulo';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent {
  constructor(private _articulosService: ArticulosService, private activatedRouter: ActivatedRoute){
    this.activatedRouter.params.subscribe(params => {
      if(params['id']){
        // coger articulo de la base de datos
        this.seleccionar(params['id'])
        this.opcion = 'modif'
      }
    })
  }
  // Por defecto estara vacio
  @Input() articulo: Articulo = new Articulo(0, '', '', 0, '')
  opcion: string = 'alta'

  seleccionar(id: number){
    this._articulosService.seleccionar(id).subscribe((data: Articulo) => {
      this.articulo = data
      console.log(this.articulo)
    })
  }

  modificar(form: HTMLFormElement){

    const fd = new FormData(form)

    const datos_json = {
      'id': this.articulo.id,
      'nombre': fd.get('nombre'),
      'descripcion': fd.get('descripcion'),
      'precio': fd.get('precio'),
      'imagen': fd.get('imagen')
    }

    this._articulosService.modificar(datos_json).subscribe((data: any) => {
      this.seleccionar(datos_json.id)
    })
  }

  cambiarRutaArchivo(path: string | undefined){
    this.articulo.imagen = 'images/' + path
  }
}
