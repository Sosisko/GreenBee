import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/interfaces';

@Component({
  selector: 'app-cart-page-prewiev',
  templateUrl: './cart-page-prewiev.component.html',
  styleUrls: ['./cart-page-prewiev.component.scss'],
})
export class CartPagePrewievComponent implements OnInit {
  cartProducts: Product[] = [];
  totalPrice!: number;
  constructor(private cartService: CartService) {
  
  }

  ngOnInit() {
    this.cartProducts = this.cartService.cartProducts;

    this.cartService.totalPrice$.subscribe((totalPrice) => {
      this.totalPrice = totalPrice;
    });
  }

  onRemoveFromCart(product: any) {
    this.cartService.removeProductFromCart(product);
  }
}
