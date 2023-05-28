import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  productCount: number = 0;
  productCountSubscription!: Subscription;

  constructor( private cartService: CartService) { }

  ngOnInit() {
   
    this.productCountSubscription = this.cartService.getProductCountObservable().subscribe((count) => {
      this.productCount = count;
    });
  }

  ngOnDestroy(): void {
    this.productCountSubscription.unsubscribe();
  }
}
