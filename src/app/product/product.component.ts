import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from '../models/interfaces';
import { CartService } from './../services/cart.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product$!: Observable<any>;
  quantity: number = 1;

  selectedOption = ''

  price  = 0

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.product$ = this.route.params.pipe(
      switchMap((params) => {
        return this.productsService.getById(params['id']);
      })
    );
  }

  onChange(option: any) {
    console.log(option.price);
    this.price = option.price

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
    this.cartService.addProductToCart(product);
    this.quantity = 1;
  }


}
