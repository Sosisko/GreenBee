import { Component, OnInit, Output } from '@angular/core';
import { CartProduct, Product } from '../models/interfaces';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  cartProducts: Product[] = [];
  totalPrice$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalQuantity$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
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
    const totalPrice = this.cartProducts.reduce(
      //@ts-ignore
      (total, product) => total + product.quantity * product.price,
      0
    );
    // Обновляем значение totalPrice в BehaviorSubject
    this.totalPrice$.next(totalPrice);

    //Считаем общее количество товаров в корзине
    const totalQuantity = this.cartProducts.reduce(
      //@ts-ignore
      (total, product) => total + product.quantity,
      0
    );
    // Обновляем значение totalPrice в BehaviorSubject
    this.totalQuantity$.next(totalQuantity);
  }

  onRemoveFromCart(product: any) {
    this.cartService.removeProductFromCart(product);
    this.updateTotal();
  }
}
