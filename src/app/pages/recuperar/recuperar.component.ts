import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.scss'],
})
export class RecuperarComponent implements OnInit {

  constructor(public menucontroller: MenuController,) {}

  openMenu() {
    console.log('open menu');
    this.menucontroller.toggle('principal');
}
  ngOnInit() {}

}
