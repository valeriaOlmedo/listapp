import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Cliente } from '../../backend/models';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  cliente: Cliente = {
    uid: '',
    email: '',
    telefono: '',
    foto: '',
    descripcion: '',
    nombre: '',
    apellido: '',
    password: '',
    direccion: null,
  };

  constructor(public menucontroller: MenuController,)
   { }

  ngOnInit() {}
  openMenu() {
    console.log('open menu');
    this.menucontroller.toggle('principal');
}

}
