import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroarticuloComponent } from './registroarticulo.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: RegistroarticuloComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroarticuloPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [RegistroarticuloComponent]
})
export class RegistroarticuloPageRoutingModule {}
