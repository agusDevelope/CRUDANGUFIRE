import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css']
})
export class CrearProductosComponent implements OnInit {
  public postForm:FormGroup

  constructor(
    public productsServices:ProductoService,
    public FormBuilder:FormBuilder,
    public router:Router
  ) {
    this.postForm = this.FormBuilder.group({
      Nombre:[''],
      Detalle:[''],
      Precio:[''],
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.productsServices.createProduct(this.postForm.value)
    this.router.navigate(['/mostrar'])
  }

}
