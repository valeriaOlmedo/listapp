import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroarticuloPageRoutingModule } from './registroarticulo-routing.module';

import { RegistroarticuloPage } from './registroarticulo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroarticuloPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroarticuloPage]
})
export class RegistroarticuloPageModule {}
