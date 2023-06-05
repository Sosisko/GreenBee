import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/interfaces';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  productCount: number = 0;
  productCountSubscription!: Subscription;

  cartProduct!: Product[];

  showCartPreview = false;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartProduct = this.cartService.cartProducts;

    this.productCountSubscription = this.cartService
      .getProductCountObservable()
      .subscribe((count) => {
        this.productCount = count;
      });
  }

  ngOnDestroy(): void {
    this.productCountSubscription.unsubscribe();
  }
}
