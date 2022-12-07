import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroarticuloPage } from './registroarticulo.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroarticuloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroarticuloPageRoutingModule {}
