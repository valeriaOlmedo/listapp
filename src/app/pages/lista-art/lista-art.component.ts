import { Component, OnInit,ViewChild } from '@angular/core';
import { MenuController,AlertController,ToastController,IonList } from '@ionic/angular';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-lista-art',
  templateUrl: './lista-art.component.html',
  styleUrls: ['./lista-art.component.scss'],
})
export class ListaArtComponent implements OnInit {
  @ViewChild(IonList) ionList: IonList;
articulos;
  constructor(
    public listaartcontroller: MenuController,
    public articuloService:ArticuloService,
    public alertController: AlertController,
    private toastCtrl: ToastController

    ) { }

  ngOnInit() {
    this.listarArticulos();
  }

  openMenu() {
    console.log('open menu');
    this.listaartcontroller.toggle('principal');
}

listarArticulos() {
  this.articuloService.listArticulos().subscribe(res => {
    this.articulos = res.articulos;
    console.log(this.articulos);
  })
}


async borrarArticulo (codigo) {
  console.log(codigo);
  const alert = await this.alertController.create({
    header: 'Eliminar Articulo',
    message: '¿Está seguro de querer eliminar el articulo?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        id: 'cancel-button',
      }, {
        text: 'Eliminar',
        id: 'confirm-button',
        handler: () => {

  this.articuloService.delete(codigo).subscribe(async (data) => {
    const message = data['success']
      ? 'Estado #' + codigo + ' borrado con exito'
      : ' Error al eliminar';
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
    });
    this.listarArticulos();

    toast.present();

    this.ionList.closeSlidingItems();
  });
}
      }
]
});

await alert.present();

}

}

