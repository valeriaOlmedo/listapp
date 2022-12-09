import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, AlertController, ToastController, IonList } from '@ionic/angular';
import { Lista_cabService } from 'src/app/services/lista_cab.service';
import { Lista_cab } from 'src/app/pages/interfaces/Lista_cab';
@Component({
  selector: 'app-lista_cab',
  templateUrl: './lista_cab.component.html',
  styleUrls: ['./lista_cab.component.scss'],
})
export class ListaCabComponent implements OnInit {
  @ViewChild(IonList) ionList: IonList;
cabeceras;
cabecera:Lista_cab;
enableNewCabecera = false;

newCabecera: Lista_cab={
clist_id: null,
clist_titulo: '',
clist_estado: 1,
clist_id_usu: 1

}
  constructor(
    public lista_cabcontroller: MenuController,
    public Lista_cabService:Lista_cabService,
    public AlertController:AlertController,
    private toastCtrl: ToastController,
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

  async borrarCabecera (codigo) {
    console.log(codigo);
    const alert = await this.AlertController.create({
      header: 'Eliminar Lista',
      message: '¿Está seguro de querer eliminar las lsita?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          id: 'cancel-button',
        }, {
          text: 'Eliminar',
          id: 'confirm-button',
          handler: () => {

    this.Lista_cabService.eliminarLista_cab(codigo).subscribe(async (data) => {
      const message = data['success']
        ? 'Estado #' + codigo + ' borrado con exito'
        : ' Error al eliminar';
      const toast = await this.toastCtrl.create({
        message,
        duration: 2000,
      });
      this.listarCab();

      toast.present();

      this.ionList.closeSlidingItems();
    });
  }
        }
  ]
  });

  await alert.present();

  }

  async guardarCabecera() {
    this.newCabecera;

    await this.Lista_cabService.crearLista_cab(this.newCabecera,this.newCabecera.clist_id).subscribe(async (data: any) => {
      const message = data['success']
        ? 'Producto Guardado con exito'
        : ' Error al guardar';
      const toast = await this.toastCtrl.create({
        message,
        duration: 2000,
      });

      toast.present();

    });

    this.listarCab();

  }
  async updateCabecera(idCabecera: number) {
    console.log('Llega');

    await this.Lista_cabService.getLista_cabById(idCabecera).subscribe(

      res => {

        this.newCabecera.clist_id = res.cabecera.clist_id;
        this.newCabecera.clist_titulo = res.articulo.clist_titulo;
        this.newCabecera.clist_estado = res.cabecera.clist_estado;
        this.newCabecera.clist_id_usu = res.cabecera.clist_id_usu;


        console.log('Actualizar', this.newCabecera);

      }

    );

  }

}
