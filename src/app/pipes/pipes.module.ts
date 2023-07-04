import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search.pipe';
import { SortOfCategoryPipe } from './sort-of-category.pipe';
import { SortOfAZPipe } from './sort-of-az.pipe';



@NgModule({
  declarations: [SearchPipe, SortOfCategoryPipe, SortOfAZPipe],
  imports: [
    CommonModule,
  ],
  exports: [SearchPipe, SortOfCategoryPipe, SortOfAZPipe]
})
export class PipesModule { }
