import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/interfaces';

@Pipe({
  name: 'sortOfPrice'
})
export class SortOfPricePipe implements PipeTransform {

  transform(products: Product[], minPrice:number = 0, maxPrice: number = 0): any {
    
   return products.filter((product) => {
    return product.price <= maxPrice && product.price >= minPrice
   }
  )}

}
