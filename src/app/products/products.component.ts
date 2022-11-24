import { Component, OnInit } from '@angular/core';
import { Porduct } from '../model/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  listProdcut = [
    { id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0 },
    { id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0 },
    { id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0 },]
  constructor() { }
  prix = -1;
  ngOnInit(): void {
  }

  decreaseQuantity(p: Porduct) {
    let indice = this.listProdcut.indexOf(p);
    if (indice != -1) {
      this.listProdcut[indice].quantity--;
    }
  }

  increaseProduct(p: Porduct) {
    let indice = this.listProdcut.indexOf(p);
    if (indice != -1) {
      this.listProdcut[indice].like++;
    }

  }






}
