import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-mostrar-productos',
  templateUrl: './mostrar-productos.component.html',
  styleUrls: ['./mostrar-productos.component.css']
})
export class MostrarProductosComponent implements OnInit {
  Products: Productos[]
  constructor(private productsService:ProductoService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res) => {

      //prueba de como es el formato del array Posts
      /* this.Posts = [
        {id:"1", "title":"titulo de prueba", "content":"contenido de prueba", "author":"author de prueba"}
       ]  */

     this.Products = res.map((e) => {
       return {
         id: e.payload.doc.id,
         ...(e.payload.doc.data() as Productos)
       };
     });

     //console.log(this.Posts) //finalmente tenemos el arreglo con los docs
   });
  }
  deleteRecord = (product) => this.productsService.deleteProduct(product);
}
