import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/interfaces';

@Pipe({
  name: 'sortOfOrder',
})
export class SortOfOrder implements PipeTransform {
  // transform(products: Product[], selectedOption: string): any[] {
  //   if (products && selectedOption && products.length > 0) {
  //     products.sort((prd1: any, prd2: any) => {
  //       if (selectedOption === 'titleAsc') {
  //         if (prd1.title < prd2.title) return -1;
  //         else return 1;
  //       }
  //       if (selectedOption === 'titleDesc') {
  //         if (prd1.title > prd2.title) return -1;
  //         else return 1;
  //       }
  //       if (selectedOption === 'priceAsc') {
  //         if (prd1.price < prd2.price) return -1;
  //         else return 1;
  //       }
  //       if (selectedOption === 'priceDesc') {
  //         if (prd1.price > prd2.price) return -1;
  //         else return 1;
  //       }
  //       return 0;
  //     });
  //   }

  //   return products;
  // }


  transform(products: Product[], selectedOption: string): any[] {
    if (products && selectedOption && products.length > 0) {
      switch (selectedOption) {
        case 'titleAsc':
          products.sort((prd1: any, prd2: any) => prd1.title < prd2.title ? -1 : 1);
          break;
        case 'titleDesc':
          products.sort((prd1: any, prd2: any) => prd1.title > prd2.title ? -1 : 1);
          break;
        case 'priceAsc':
          products.sort((prd1: any, prd2: any) => prd1.price < prd2.price ? -1 : 1);
          break;
        case 'priceDesc':
          products.sort((prd1: any, prd2: any) => prd1.price > prd2.price ? -1 : 1);
          break;
          default:
            products.sort((prd1: any, prd2: any) => prd1.id < prd2.id ? -1 : 1);
      }
    }
  
    return products;
  }
}
