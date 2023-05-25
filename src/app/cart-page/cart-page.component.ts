import { Component, OnInit, Output } from '@angular/core';
import { Product } from '../models/interfaces';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  cartProducts: Product[] = [];
  totalPrice = 0;

  pSub!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartProducts = this.cartService.cartProducts;
    console.log(this.cartProducts);
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.totalPrice += +this.cartProducts[i].price;
    }
  }

  onRemoveFromCart(product: any) {
    this.totalPrice -= +product.price
    this.cartProducts.splice(this.cartProducts.indexOf(product), 1)
    
    
  }
}
