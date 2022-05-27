import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ListasComponent } from './listas/listas.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { HistorialComponent } from './historial/historial.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ListaArtComponent } from './lista-art/lista-art.component';



@NgModule({
  declarations: [
    HomeComponent,
    PerfilComponent,
    ListasComponent,
    RecuperarComponent,
    ArticulosComponent,
    HistorialComponent,
    CategoriaComponent,

    ListaArtComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class PagesModule { }
