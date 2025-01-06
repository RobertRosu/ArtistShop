import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { ListadoComponent } from './components/listado/listado.component';
import { ListaGeneralComponent } from './components/lista-general/lista-general.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'nuevo', component: ModificarComponent},
  {path:'listado', component: ListadoComponent},
  {path:'lista-general', component: ListaGeneralComponent},
  {path:'modificar/:id', component: ModificarComponent},
  {path:'**', pathMatch:'full', redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
