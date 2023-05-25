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

  constructor(private cartService: CartService) {}



  onAddToCart(product: Product) {
    this.cartService.addProductToCart(product);
  }
}
