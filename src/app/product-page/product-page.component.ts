import { Component, Input } from '@angular/core';
import { Product } from '../models/interfaces';
import { CartService } from '../services/cart.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  animations: [
    trigger('btnOne', [
      state('start', style({ opacity: 0, transform: 'translateY(-40px)' })),
      state('end', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('start <=> end', [animate('0.3s ease-in-out')]),
    ]),
    trigger('btnTwo', [
      state('start', style({ opacity: 0, transform: 'translateY(-40px)' })),
      state('end', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('start <=> end', [animate('0.4s ease-in-out')]),
    ]),
  ],
})
export class ProductPageComponent {
  btnState = 'start';
  animate() {
    this.btnState = this.btnState === 'end' ? 'start' : 'end';
  }

  @Input() product!: Product;
  visible: boolean = true;
  quantity: number = 1;



  constructor(private cartService: CartService, private alertService: AlertService) {}

  onAddToCart(product: Product) {
    product.quantity = this.quantity;
    this.cartService.addProductToCart(product);
    this.quantity = 1;
  }
}
