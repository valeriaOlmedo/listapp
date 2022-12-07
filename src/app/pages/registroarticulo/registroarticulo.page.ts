import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticuloService } from 'src/app/services/articulo.service';


@Component({
  selector: 'app-registroarticulo',
  templateUrl: './registroarticulo.page.html',
  styleUrls: ['./registroarticulo.page.scss'],
})
export class RegistroarticuloPage implements OnInit {
  private codigo;


  registroarticulo = this.fb.group({
    descripcion: ['', Validators.required],
    precio: [''],
    cat_id: [''],
  });


  constructor(
    private fb: FormBuilder,
    private articuloService: ArticuloService,
    public router: Router,
    private toastCtrl: ToastController,
    public loading: LoadingController,
    private activateRoute: ActivatedRoute,
    private formGroup:FormGroup,
  ) {}

  ngOnInit() {
    this.listarArticulo();
  }

  guardarArticulo() {
    const articulo = this.registroarticulo.value;
    const articulos = {
      art_codigo: this.codigo === '0' ? null : Number(this.codigo),
      art_descripcion: articulo.descripcion,
      art_precio: articulo.precio,
      art_cat_id: articulo.categoria,
    };
    console.log('DATA ARTICULO', articulos);

    this.articuloService.create(articulos).subscribe(async (data: any) => {
      const message = data['success']
        ? 'Articulo Guardado con exito'
        : ' Error al guardar';
      const toast = await this.toastCtrl.create({
        message,
        duration: 2000,
      });

      toast.present();

      this.router.navigate(['/lista-art']);
    });
  }

  listarArticulo() {
    this.codigo = this.activateRoute.snapshot.params.id;

    if (this.codigo !== '0') {
      this.articuloService.getArticuloById(this.codigo).subscribe((data) => {
        if (data.success) {
          this.registroarticulo.setValue({
            descripcion: data.articulo.art_descripcion,
            precio: data.articulo.art_precio,
            categoria: data.articulo.art_cat_id,
          });
          console.log(data);
        }
      });
    }
  }

}

