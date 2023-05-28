import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/interfaces';

@Pipe({
  name: 'sortOfCategory'
})
export class SortOfCategoryPipe implements PipeTransform {

  transform(products: Product[], category: string = ''): any {
   
    if (!category || category === 'All') {
      return products
    }
    return products.filter((product) => {
      return product.category == category
      
    });
  }
}
