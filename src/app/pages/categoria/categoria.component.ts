import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {

  constructor(public categoriacontroller: MenuController,) { }

  ngOnInit() {}
  openMenu() {
    console.log('open menu');
    this.categoriacontroller.toggle('principal');
}

}




