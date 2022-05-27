import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Lista_cabService } from 'src/app/services/lista_cab.service';

@Component({
  selector: 'app-lista_cab',
  templateUrl: './lista_cab.component.html',
  styleUrls: ['./lista_cab.component.scss'],
})
export class ListaCabComponent implements OnInit {
cabeceras;
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

      if(res.success){
      this.cabeceras = res.lista_cabs;
      console.log(res.lista_cabs);

    } else {
      this.cabeceras = [];
    }
    })
  }


}
