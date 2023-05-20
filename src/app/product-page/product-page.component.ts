import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Observable, Subscription, map } from 'rxjs';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  @Input() product: any;
  hover: boolean = false;
}
