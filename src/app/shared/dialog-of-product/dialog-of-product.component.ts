import { Component } from '@angular/core';
import { Product } from 'src/app/models/interfaces';
import { CartService } from 'src/app/services/cart.service';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-of-product',
  templateUrl: './dialog-of-product.component.html',
  styleUrls: ['./dialog-of-product.component.scss'],
})
export class DialogOfProductComponent {
  //product:any
  quantity: number = 1;
  selectedOption: any;
  measurePrice = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public product: any,
    private cartService: CartService
  ) {}

  ngOnInit() {
    if (this.product.options) {
      this.selectedOption = this.product.options[0].measureQantity;
      this.measurePrice = this.product.options[0].measurePrice;
    }
    console.log(this.product);
  }
  onChange(option: any) {
    this.measurePrice = option.measurePrice;
    console.log(option);
  }
  decreaseQuantity() {
    if (this.quantity !== undefined && this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    if (this.quantity !== undefined) {
      this.quantity++;
    }
  }

  addProduct(product: Product) {
    const cartProduct: any = {
      ...product,
      price: this.measurePrice ? this.measurePrice : product.price,
      quantity: this.quantity,
    };
    this.cartService.addProductToCart(cartProduct);
    this.quantity = 1;
  }
}
