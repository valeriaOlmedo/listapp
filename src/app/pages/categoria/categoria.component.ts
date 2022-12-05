import { Component, OnInit,ViewChild } from '@angular/core';
import { MenuController,AlertController,ToastController,IonList } from '@ionic/angular';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {
  @ViewChild(IonList) ionList: IonList;
  categorias ;
  constructor(
    public categoriacontroller: MenuController,
    public categoriaService: CategoriaService,
    public alertController: AlertController,
    private toastCtrl: ToastController

  ) {}
  ngOnInit() {
    this.listarCategorias();
  }
  openMenu() {
    console.log('open menu');
    this.categoriacontroller.toggle('principal');
  }
  listarCategorias() {
    this.categoriaService.listCategorias().subscribe((res) => {
      this.categorias = res.categorias;
      console.log(this.categorias);

    });
  }




  async borrarCategorias(codigo) {
    console.log(codigo);
    const alert = await this.alertController.create({
      header: 'Eliminar Categoria',
      message: '¿Está seguro de querer eliminar la Categoria?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          id: 'cancel-button',
        }, {
          text: 'Eliminar',
          id: 'confirm-button',
          handler: () => {

    this.categoriaService.delete(codigo).subscribe(async (data) => {
      const message = data['success']
        ? 'Estado #' + codigo + ' borrado con exito'
        : ' Error al eliminar';
      const toast = await this.toastCtrl.create({
        message,
        duration: 2000,
      });
      this.listarCategorias();

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
