import { Component, Output } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-collection-page',
  templateUrl: './products-collection-page.component.html',
  styleUrls: ['./products-collection-page.component.scss'],
})
export class ProductsCollectionPageComponent {
  products$!: any;
  selectedOption: string = 'default';
  sortingColumn!: string;
  @Output() boxView = false;
  @Output() fullView = true;

  products: any;

  categoryFilters: string[] = [];
  measureFilters: string[] = [];

  maxPriceOfProductsArray!: number;
  minPriceOfProductsArray!: number;

  minPrice: number = 0;
  maxPrice: number = 0;

  constructor(public productsService: ProductsService) {}

  ngOnInit() {
    this.products$ = this.productsService.getAll();

    this.products$.subscribe((products: any) => {
      this.products = products;
      console.log(this.products);

      const pricesOfProductsArray = this.products.map(
        (product: any) => product.price
      );
      this.maxPriceOfProductsArray = Math.max(...pricesOfProductsArray);
      console.log(this.maxPriceOfProductsArray);
      this.maxPrice = this.maxPriceOfProductsArray;

      this.minPriceOfProductsArray = Math.min(...pricesOfProductsArray);
      console.log(this.minPriceOfProductsArray);
      this.minPrice = this.minPriceOfProductsArray;
    });
  }

  onBoxView() {
    this.boxView = true;
    this.fullView = false;
  }
  onFullView() {
    this.boxView = false;
    this.fullView = true;
  }
  onOptionChange(selectedOption: string) {
    this.selectedOption = selectedOption;
  }

  onCategoryChange(event: any, category: string) {
    if (event.target.checked) {
      this.categoryFilters = [...this.categoryFilters, category]; //Если присваивать без spread, то pipe не чувствует первое изменение массива
    } else {
      this.categoryFilters = this.categoryFilters.filter(
        (c: string) => c !== category
      );
    }
    console.log(this.categoryFilters);
  }

  onMeasureValueChange(event: any, measure: string) {
    if (event.target.checked) {
      this.measureFilters = [...this.measureFilters, measure]; //Если присваивать без spread, то pipe не чувствует первое изменение массива
    } else {
      this.measureFilters = this.measureFilters.filter(
        (c: string) => c !== measure
      );
    }
    console.log(this.measureFilters);
  }

  onMinPriceValueChange(minPrice: number) {
    this.minPrice = minPrice;
    console.log('от', this.minPrice);
  }
  onMaxPriceValueChange(maxPrice: number) {
    this.maxPrice = maxPrice;
    console.log('до', this.maxPrice);
  }


}
