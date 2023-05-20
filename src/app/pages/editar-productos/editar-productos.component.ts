import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})
export class EditarProductosComponent implements OnInit {
  public editForm: FormGroup;
  postRef:any;

  constructor(
    public productsService:ProductoService,
    public formBuilder:FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      Nombre: [''],
      Detalle: [''],
      Precio: ['']
    })
   }

  ngOnInit(): void {
    //console.log(this.activeRoute.snapshot.params) //desde aqui sacamos el id
    const id = this.activeRoute.snapshot.paramMap.get('id');

    this.productsService.getPorductById(id).subscribe(res => {
      this.postRef = res;
      this.editForm = this.formBuilder.group({
        Nombre: [this.postRef.Nombre],
        Detalle: [this.postRef.Detalle],
        Precio: [this.postRef.Precio]
      })
    })
  }

  onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');

    this.productsService.updateProduct(this.editForm.value, id);
    this.router.navigate(['/mostrar']);
    //console.log(this.editForm.value) //podemos ver los valores capturados
  }

}
