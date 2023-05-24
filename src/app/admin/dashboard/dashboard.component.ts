import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/interfaces';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  pSub!: Subscription;
  rSub!: Subscription;
  loading: boolean = true;

  productName: any;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.pSub = this.productsService.getAll().subscribe((products) => {
      console.log(products);
      this.products = products;
      this.loading = false;
    });
  }
  ngOnDestroy(): void {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
    if (this.rSub) {
      this.rSub.unsubscribe();
    }
  }

  remove(id: string | undefined) {
    if (id !== undefined) {
      this.rSub = this.productsService.remove(id).subscribe(() => {
        this.products = this.products.filter((product) => product.id !== id);
      });
    }
  }
}
