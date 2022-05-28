import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Lista_detService } from 'src/app/services/lista_det.service';

@Component({
  selector: 'app-listas',
  templateUrl: './lista_det.component.html',
  styleUrls: ['./lista_det.component.scss'],
})
export class ListaDetComponent implements OnInit {
  detalles;
  constructor(
    public lista_detcontroller: MenuController,
    public Lista_detService:Lista_detService,
    public menucontroller: MenuController) {}

    openMenu() {
      console.log('open menu');
      this.lista_detcontroller.toggle('principal');
  }
  ngOnInit() {
    this.listarDet();
  }
  listarDet() {
    this.Lista_detService.listLista_det().subscribe(res => {

      if(res.success){
      this.detalles = res.lista_dets;
      console.log(res.lista_dets);

    } else {
      this.detalles = [];
    }
    })
  }

}

