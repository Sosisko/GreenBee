import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/interfaces';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-products-collection-page',
  templateUrl: './products-collection-page.component.html',
  styleUrls: ['./products-collection-page.component.scss'],
})
export class ProductsCollectionPageComponent {
  
}
