import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ListaDetComponent } from './lista_det/lista_det.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { HistorialComponent } from './historial/historial.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ListaArtComponent } from './lista-art/lista-art.component';
import { ListaCabComponent } from './lista_cab/lista_cab.component';
import { RegistroarticuloComponent } from './registroarticulo/registroarticulo.component';
import { PruebaarticuloComponent} from './pruebaarticulo/pruebaarticulo.component';



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
    RegistroarticuloComponent,
    PruebaarticuloComponent,

  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
