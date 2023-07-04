import { Component, Output } from '@angular/core';
import { ProductsService } from '../services/products.service';

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

  constructor(public productsService: ProductsService) {}

  ngOnInit() {
    this.products$ = this.productsService.getAll();
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
}
