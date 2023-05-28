import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search.pipe';
import { SortOfCategoryPipe } from './sort-of-category.pipe';



@NgModule({
  declarations: [SearchPipe, SortOfCategoryPipe],
  imports: [
    CommonModule,
  ],
  exports: [SearchPipe, SortOfCategoryPipe]
})
export class PipesModule { }
