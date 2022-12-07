import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ListaDetComponent } from './lista_det/lista_det.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { HistorialComponent } from './historial/historial.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ListaArtComponent } from './lista-art/lista-art.component';
import { ListaCabComponent } from './lista_cab/lista_cab.component';
import { RegistroarticuloPage } from './registroarticulo/registroarticulo.page';



@NgModule({
  declarations: [
    HomeComponent,
    PerfilComponent,
    RecuperarComponent,
    ArticulosComponent,
    HistorialComponent,
    CategoriaComponent,
    ListaArtComponent,
    ListaCabComponent,
    ListaDetComponent,
    RegistroarticuloPage,

  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class PagesModule { }
