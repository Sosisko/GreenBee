import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from '../models/interfaces';
import { CartService } from './../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product$!: Observable<any>;
  quantity:number = 1

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

  addProduct(product: Product) {
    product.quantity = this.quantity;
    this.cartService.addProductToCart(product)
    this.quantity = 1;
  }
}
