import { Component, Input } from '@angular/core';
import { Product } from '../models/interfaces';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  @Input() product: any;
  hover: boolean = false;
  quantity:number = 1
  constructor(private cartService: CartService) {}



  onAddToCart(product: Product) {
    product.quantity = this.quantity;
    this.cartService.addProductToCart(product);
    this.quantity = 1;
  }
}
