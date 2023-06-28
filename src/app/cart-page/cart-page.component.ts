import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Product } from '../models/interfaces';

import { CartService } from '../services/cart.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit, OnDestroy {
  cartProducts: Product[] = [];
  totalPrice!: number;
  totalQuantity!: number;
  pSub!: Subscription;
  qSub!: Subscription;
  sumProduct = 0;
  productSumSubscription!: Subscription;

  constructor(private cartService: CartService) {}

  updateQuantity(product: Product, newQuantity: number | undefined) {
    this.cartService.updateQuantity(product, newQuantity);
    this.updateTotal();
  }

  decreaseQuantity(product: Product) {
    if (product.quantity !== undefined && product.quantity > 1) {
      product.quantity--;
      this.updateQuantity(product, product.quantity);
    }
  }

  increaseQuantity(product: Product) {
    if (product.quantity !== undefined) {
      product.quantity++;
      this.updateQuantity(product, product.quantity);
    }
  }

  ngOnInit() {
    this.cartProducts = this.cartService.cartProducts;
    console.log(this.cartProducts);
    this.updateTotal();
  }

  updateTotal() {
    this.pSub = this.cartService.totalPrice$.subscribe((totalPrice) => {
      this.totalPrice = totalPrice;
    });
    this.qSub = this.cartService.totalQuantity$.subscribe((totalQuantity) => {
      this.totalQuantity = totalQuantity;
    });
  }

  onRemoveFromCart(product: any) {
    this.cartService.removeProductFromCart(product);
    this.updateTotal();
  }

  ngOnDestroy() {
    if(this.pSub) {
      this.pSub.unsubscribe()
    }
    if(this.qSub) {
      this.qSub.unsubscribe()
    }
  }
}
