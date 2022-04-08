import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-lista-art',
  templateUrl: './lista-art.component.html',
  styleUrls: ['./lista-art.component.scss'],
})
export class ListaArtComponent implements OnInit {

  constructor(public listaartcontroller: MenuController,) { }

  ngOnInit() {}

  openMenu() {
    console.log('open menu');
    this.listaartcontroller.toggle('principal');
}
}
