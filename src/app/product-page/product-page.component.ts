import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/interfaces';
import { CartService } from '../services/cart.service';

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogOfProductComponent } from '../shared/dialog-of-product/dialog-of-product.component';


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


  constructor(private cartService: CartService, public dialog: MatDialog) {}


  onAddToCart(product: Product) {
    product.quantity = this.quantity;
    this.cartService.addProductToCart(product);
    this.quantity = 1;
  }

  openDialog(product: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = product; // передаем product в data
    this.dialog.open(DialogOfProductComponent, dialogConfig);
  }

}
