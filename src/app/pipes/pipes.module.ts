import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search.pipe';
import { SortOfCategoryPipe } from './sort-of-category.pipe';
import { SortOfOrder } from './sort-of-order.pipe';
import { SortOfCategoryProductCollectionPipe } from './sort-of-category-product-collection.pipe';
import { SortOfMeasureProductCollectionPipe } from './sort-of-measure-product-collection.pipe';

@NgModule({
  declarations: [
    SearchPipe,
    SortOfCategoryPipe,
    SortOfOrder,
    SortOfCategoryProductCollectionPipe,
    SortOfMeasureProductCollectionPipe,
  ],
  imports: [CommonModule],
  exports: [
    SearchPipe,
    SortOfCategoryPipe,
    SortOfOrder,
    SortOfCategoryProductCollectionPipe,
    SortOfMeasureProductCollectionPipe
  ],
})
export class PipesModule {}
