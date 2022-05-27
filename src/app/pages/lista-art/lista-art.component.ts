import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-lista-art',
  templateUrl: './lista-art.component.html',
  styleUrls: ['./lista-art.component.scss'],
})
export class ListaArtComponent implements OnInit {
articulos;
  constructor(
    public listaartcontroller: MenuController,
    public articuloService:ArticuloService
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

}


/*
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-articulo',
  //templateUrl: './articulo.component.html',
  templateUrl: './lista-art.component.html',
  styleUrls: ['./lista-art.component.scss'],
})
export class ListaArtComponent implements OnInit {
  articulos;

  constructor(
    public articulocontroller: MenuController,
    public articuloService: ArticuloService
    ) { }

  ngOnInit() {
    this.listarArticulos();
  }
  openMenu() {
    console.log('open menu');
    this.articulocontroller.toggle('principal');
}

listarArticulos() {
  this.articuloService.listArticulos().subscribe(res => {
    this.articulos = res.articulos;
    console.log(this.articulos);
  })
}
}
/* buscarArticulos(event) {
  let val = event.target.value;
  if (val && val.trim() != '') {
    this.articuloService.filtrarArticulo(val).subscribe((res) => {
      this.articulos = res.result;
      this.articulos = this.articulos.filter((item) => {
        return (item.cat_nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    });
  } else {
    this.listarArticulos();
  }
}

eliminarArticulo(articulo, i, slidingItem) {
  if (window.confirm("Seguro que quieres eliminar?")) {
    this.articuloService.eliminarArticulo(this.articulos.cat_id)
      .subscribe(() => {
        this.articulos.splice(i, 1);
        slidingItem.close();
        this.ionViewWillEnter();
        console.log("Articulo eliminada!");
      });
  } */
//}

