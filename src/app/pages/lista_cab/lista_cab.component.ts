import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Lista_cabService } from '../../services/lista_cab.service';
import { Lista_cab } from '../interfaces/Lista_cab';

@Component({
  selector: 'app-lista-cab',
  templateUrl: './lista_cab.component.html',
  styleUrls: ['./lista_cab.component.scss'],
})
export class ListaCabComponent implements OnInit {
cabecera;
  constructor(
    public lista_cabcontroller: MenuController,
    public Lista_cabService:Lista_cabService
    ) { }

    ngOnInit() {
      this.listarCab();
    }
  openMenu() {
    console.log('open menu');
    this.lista_cabcontroller.toggle('principal');
}



  listarCab() {
    this.Lista_cabService.listLista_cab().subscribe(res => {
      this.cabecera = res.cabeceras;
      console.log(this.cabecera);
    })
  }
}
