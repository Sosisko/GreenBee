import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  products$!: any;
  productName: any;

  category = '';

  p: number = 1;
  collection: any[] = this.products$;

  constructor(
    public productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.products$ = this.productsService.getAll();
    this.productsService.setCategory(this.category); //При переключении страницы, чтобы возвращалось в категорию All
  }

  setCat(category: string) {
    this.category = category;
    if (this.category !== '') {
      this.router.navigate(['/'], {
        queryParams: {
          category: this.category,
        },
      });
    this.productsService.setCategory(this.category);
      this.p = 1;
    }
  }
}
