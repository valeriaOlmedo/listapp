import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pruebaarticulo',
  templateUrl: './pruebaarticulo.component.html',
  styleUrls: ['./pruebaarticulo.component.scss'],
})
export class PruebaarticuloComponent implements OnInit {
  private codigo;

  registroarticulo = this.fb.group({
    descripcion: ['', Validators.required],
    precio: [''],
    cat_id: [''],
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {}

}
