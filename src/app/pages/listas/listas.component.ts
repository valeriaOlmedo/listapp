import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  constructor(public menucontroller: MenuController,) {}

  openMenu() {
    console.log('open menu');
    this.menucontroller.toggle('principal');
}
  ngOnInit() {}

}
