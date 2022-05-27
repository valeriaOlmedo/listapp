import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {
  categorias;
  constructor(
    public categoriacontroller: MenuController,
    public categoriaService: CategoriaService
    ) { }
  ngOnInit() {
    this.listarCategorias();
  }
  openMenu() {
    console.log('open menu');
    this.categoriacontroller.toggle('principal');
  }
listarCategorias() {
  this.categoriaService.listCategorias().subscribe(res => {
    this.categorias = res.categorias;
    console.log(this.categorias);
  })
}

/* buscarCategorias(event) {
  let val = event.target.value;
  if (val && val.trim() != '') {
    this.categoriaService.filtrarCategoria(val).subscribe((res) => {
      this.categorias = res.result;
      this.categorias = this.categorias.filter((item) => {
        return (item.cat_nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    });
  } else {
    this.listarCategorias();
  }
}

eliminarCategoria(categoria, i, slidingItem) {
  if (window.confirm("Seguro que quieres eliminar?")) {
    this.categoriaService.eliminarCategoria(this.categorias.cat_id)
      .subscribe(() => {
        this.categorias.splice(i, 1);
        slidingItem.close();
        this.ionViewWillEnter();
        console.log("Categoria eliminada!");
      });
  } */
}






