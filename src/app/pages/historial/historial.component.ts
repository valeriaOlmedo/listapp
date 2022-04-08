import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss'],
})
export class HistorialComponent implements OnInit {


  constructor(public historialcontroller: MenuController,) {}

  openMenu() {
    console.log('open menu');
    this.historialcontroller.toggle('principal');
}
  ngOnInit() {}

}


