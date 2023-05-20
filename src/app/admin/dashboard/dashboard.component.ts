import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  products!: any;
  pSub!: Subscription;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    // this.pSub = this.productsService.getAll().subscribe((products) => {
    //   this.products = products;
    //   console.log(this.products);
      
    // });
  }

  ngOnDestroy(): void {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }
}
