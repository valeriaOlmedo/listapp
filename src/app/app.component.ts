import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public menucontroller: MenuController,) {}

  openMenu() {
    console.log('open menu');
    this.menucontroller.toggle('principal');
}
}
