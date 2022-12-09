import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MenuController,
  AlertController,
  ToastController,
  IonList,
} from '@ionic/angular';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from 'src/app/pages/interfaces/Categoria';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {

  categorias;
  categoria: Categoria;
  enableNewCategoria = false;

  newCategoria: Categoria = {
    cat_id: null,
    cat_descripcion: '',
    cat_codigo: 5,
  };


  @ViewChild(IonList) ionList: IonList;

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
      console.log('Carga inicial', this.categorias);
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
        },
        {
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
          },
        },
      ],
    });

    await alert.present();
  }

   async guardarCategoria() {
    this.newCategoria;


    await this.categoriaService.crearCategoria(this.newCategoria, this.newCategoria.cat_id,).subscribe(async (data: any) => {
      const message = data['success']
        ? 'Producto Guardado con exito'
        : ' Error al guardar';
      const toast = await this.toastCtrl.create({
        message,
        duration: 2000,
      });

      toast.present();

    });

    this.listarCategorias();

  }

  async updateCategoria(idCategoria: number) {
    console.log('Llega')

    await this.categoriaService.getCategoriaById(idCategoria).subscribe(
      res => {

        this.newCategoria.cat_id = res.categoria.cat_id;
        this.newCategoria.cat_descripcion = res.categoria.cat_descripcion;

        console.log('Actualizar', this.newCategoria);

      }
    );

  }
 limpiar(){

  this.newCategoria.cat_descripcion = ' ';
  this,this.newCategoria.cat_id = null;

console.log( ' limpia',this.newCategoria);
 }
}

