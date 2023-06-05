import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/interfaces';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-products-collection-page',
  templateUrl: './products-collection-page.component.html',
  styleUrls: ['./products-collection-page.component.scss'],
})
export class ProductsCollectionPageComponent implements OnInit, OnDestroy {
  products!: Product[];
  pSub!: Subscription;

  p: number = 1;
  collection: any[] = this.products;  

  constructor(private productsService: ProductsService) {}
  ngOnInit() {
    this.pSub = this.productsService.getAll().subscribe((product) => {
      this.products = product;
    });
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }
}
