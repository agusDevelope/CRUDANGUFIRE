import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Productos } from 'src/app/models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private angularFirestore: AngularFirestore ) { }

  getProducts() {
    return this.angularFirestore
            .collection("products")
            .snapshotChanges()
  }

  getPorductById(id) {
    return this.angularFirestore
            .collection("products")
            .doc(id)
            .valueChanges()
  }

  createProduct(product: Productos) {
    debugger
    return new Promise<any> ( (resolve, rejects) => {
          this.angularFirestore
              .collection("products")
              .add(product)
              .then( (response) => {
                 console.log(response)
              },
              (error) => {
                rejects(error)
              })
    })
  }

  updateProduct(product: Productos, id) {
    return this.angularFirestore
      .collection("products")
      .doc(id)
      .update({
        Nombre: product.Nombre,
        Detalle: product.Detalle,
        Precio: product.Precio
      });
  }

  //eliminar un post
  deleteProduct(product) {
    return this.angularFirestore
    .collection("products")
    .doc(product.id)
    .delete();
  }
}
