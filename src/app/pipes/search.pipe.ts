import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/interfaces';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(products: Product[], productName: string = ''): any {
    if (!productName.trim()) {
      return products;
    }
    return products.filter((product) => {
      return product.title
        .toLocaleLowerCase()
        .includes(productName.trim().toLocaleLowerCase());
    });
  }
}
