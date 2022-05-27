import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './lista_det.component.html',
  styleUrls: ['./lista_det.component.scss'],
})
export class ListaDetComponent implements OnInit {

  constructor(public menucontroller: MenuController,) {}

  openMenu() {
    console.log('open menu');
    this.menucontroller.toggle('principal');
}
  ngOnInit() {}

}
