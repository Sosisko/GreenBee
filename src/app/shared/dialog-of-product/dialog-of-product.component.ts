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
  measureQantity: any;
  selectedOptions: any;
  measurePrice = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public product: any,
    private cartService: CartService
  ) {}

  ngOnInit() {
    if (this.product.options) {
      this.measureQantity = this.product.options[0].measureQantity;
      this.measurePrice = this.product.options[0].measurePrice;
      this.selectedOptions = {
        measurePrice: this.product.options[0].measurePrice,
        measureQantity: this.product.options[0].measureQantity,
        measureValue: this.product.options[0].measureValue,
      };
    }
  }
  onChange(option: any) {
    this.measurePrice = option.measurePrice;
    this.selectedOptions = option;
    console.log(this.selectedOptions);
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
      options: this.selectedOptions,
      price: this.measurePrice ? this.measurePrice : product.price,
      quantity: this.quantity,
    };
    console.log(cartProduct);

    this.cartService.addProductToCart(cartProduct);
    this.quantity = 1;
  }
}
