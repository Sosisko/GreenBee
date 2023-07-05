import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortOfOrder',
})
export class SortOfOrder implements PipeTransform {
  transform(products: any[], selectedOption: string): any[] {
    if (products && selectedOption && products.length > 0) {
      products.sort((prd1: any, prd2: any) => {
        if (selectedOption === 'titleAsc') {
          if (prd1.title < prd2.title) return -1;
          else  return 1;
        } 
        if (selectedOption === 'titleDesc') {
          if (prd1.title > prd2.title) return -1;
          else return 1;
        }
        if (selectedOption === 'priceAsc') {
          if (prd1.price < prd2.price) return -1;
          else return 1;
        }
        if (selectedOption === 'priceDesc') {
          if (prd1.price > prd2.price) return -1;
          else return 1;
        }
        return 0;
      });

    }

    return products;
  }
}
