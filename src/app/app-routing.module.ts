import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListaDetComponent } from './pages/lista_det/lista_det.component';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { ListaArtComponent } from './pages/lista-art/lista-art.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ListaCabComponent } from './pages/lista_cab/lista_cab.component';


const routes: Routes = [
  { path: 'home',component:HomeComponent },
  { path: 'listaart',component:ListaArtComponent },
  { path: 'perfil',component:PerfilComponent },
  { path: 'lista_det',component:ListaDetComponent },
  { path: 'recuperar',component:RecuperarComponent },
  { path: 'historial',component:HistorialComponent },
  { path: 'articulos',component:ArticulosComponent },
  { path: 'categoria',component:CategoriaComponent },
  { path: 'lista_cab',component:ListaCabComponent },
  { path: '',component:HomeComponent },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
