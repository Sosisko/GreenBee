import { ChangeDetectorRef, Component, Output } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/interfaces';

@Component({
  selector: 'app-products-collection-page',
  templateUrl: './products-collection-page.component.html',
  styleUrls: ['./products-collection-page.component.scss'],
})
export class ProductsCollectionPageComponent {
  products$!: any;
  selectedOption!: string;
  sortingColumn!: string;
  @Output() boxView = true;
  @Output() fullView = false;

  products: any;

  categoryFilters: string[] = [];
  //categoryFilters: any;

  constructor(public productsService: ProductsService) {}

  ngOnInit() {
    this.products$ = this.productsService.getAll();

    this.products$.subscribe((products: any) => {
      this.products = products;
      console.log(this.products);
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
      this.categoryFilters = [...this.categoryFilters, category]; // use spread syntax to create a new array with the new value
    } else {
      this.categoryFilters = this.categoryFilters.filter(
        (c: string) => c !== category
      );
    }
    console.log(this.categoryFilters);
  }
}
