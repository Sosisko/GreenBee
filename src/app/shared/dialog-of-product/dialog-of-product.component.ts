import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { Product } from 'src/app/models/interfaces';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-of-product',
  templateUrl: './dialog-of-product.component.html',
  styleUrls: ['./dialog-of-product.component.scss'],

})
export class DialogOfProductComponent {

  //product:any
  quantity:number = 1

  constructor(@Inject(MAT_DIALOG_DATA) public product: any, public dialog: MatDialog,
    private productsService: ProductsService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}


  ngOnInit() {
    
    console.log(this.product);
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
    product.quantity = this.quantity;
    this.cartService.addProductToCart(product)
    this.quantity = 1;
  }


}

