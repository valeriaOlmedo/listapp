import { Component, OnInit,ViewChild } from '@angular/core';
import { MenuController,AlertController,ToastController,IonList } from '@ionic/angular';
import { ArticuloService } from 'src/app/services/articulo.service';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/pages/interfaces/articulo';
import { Categoria } from 'src/app/pages/interfaces/categoria';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-lista-art',
  templateUrl: './lista-art.component.html',
  styleUrls: ['./lista-art.component.scss'],
})
export class ListaArtComponent implements OnInit {

  @ViewChild(IonList) ionList: IonList;
articulos;
categorias;
categoria: Categoria;
articulo: Articulo;
enableNewArticulo = false;

newCategoria: Categoria = {
  cat_id: null,
  cat_descripcion: '',
  cat_codigo: 5,
};


newArticulo: Articulo = {
  art_id: null,
  art_descripcion:  '',
  art_precio: null,
  art_cat_id: null,
  art_cantidad :null,
};

  constructor(
    public listaartcontroller: MenuController,
    public articuloService:ArticuloService,
    public categoriaService:CategoriaService,
    public alertController: AlertController,
    private toastCtrl: ToastController,
    public router: Router

    ) { }

  ngOnInit() {
    this.listarArticulos();
    this.listarCategorias();
  }

  openMenu() {
    console.log('open menu');
    this.listaartcontroller.toggle('principal');
}
listarCategorias() {
  this.categoriaService.listCategorias().subscribe((res) => {
    this.categorias = res.categorias;
    console.log('Carga inicial', this.categorias);
  });
}
listar() {
  this.newArticulo.art_cat_id=this.newCategoria.cat_id;
    console.log('Carga inicial', this.newArticulo.art_cat_id);

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

async guardarArticulo() {
  this.newArticulo;

  await this.articuloService.crearArticulo(this.newArticulo,this.newArticulo.art_id).subscribe(async (data: any) => {
    const message = data['success']
      ? 'Producto Guardado con exito'
      : ' Error al guardar';
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
    });

    toast.present();

  });

  this.listarArticulos();

}
async updateArticulo(idArticulo: number) {
  console.log('Llega')

  await this.articuloService.getArticuloById(idArticulo).subscribe(
    res => {

      this.newArticulo.art_id = res.articulo.art_id;
      this.newArticulo.art_descripcion = res.articulo.art_descripcion;
      this.newArticulo.art_precio = res.articulo.art_precio;
      this.newArticulo.art_cat_id = res.articulo.art_cat_id;
      this.newArticulo.art_cantidad = res.articulo.art_cantidad;

      console.log('Actualizar', this.newArticulo);

    }
  );

}
}

