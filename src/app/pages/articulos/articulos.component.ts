import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss'],
})
export class ArticulosComponent implements OnInit {
  enableNewProducto = false;

  constructor(public articulocontroller: MenuController,) { }

  ngOnInit() {}
  openMenu() {
    console.log('open menu');
    this.articulocontroller.toggle('principal');
}
nuevo() {
  this.enableNewProducto = true;

}

}
