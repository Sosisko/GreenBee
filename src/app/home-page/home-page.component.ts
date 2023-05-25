import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  products$!: any;
  productName: any;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products$ = this.productsService.getAll();
    //console.log(this.products$);
  }
}
