import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/interfaces';

@Pipe({
  name: 'sortOfOrder',
})
export class SortOfOrder implements PipeTransform {
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
  
  //  transform(products:any, selectedOption:any) {
  //   if (products && selectedOption && products.length > 0) {
  //     if (selectedOption === 'titleAsc') {
  //       products.sort((prd1: { title: number; }, prd2: { title: number; }) => prd1.title < prd2.title ? -1 : 1);
  //     } else if (selectedOption === 'titleDesc') {
  //       products.sort((prd1: { title: number; }, prd2: { title: number; }) => prd1.title > prd2.title ? -1 : 1);
  //     } else if (selectedOption === 'priceAsc') {
  //       products.sort((prd1: { price: number; }, prd2: { price: number; }) => prd1.price < prd2.price ? -1 : 1);
  //     } else if (selectedOption === 'priceDesc') {
  //       products.sort((prd1: { price: number; }, prd2: { price: number; }) => prd1.price > prd2.price ? -1 : 1);
  //     } else {
  //       products.sort((prd1: { id: number; }, prd2: { id: number; }) => prd1.id < prd2.id ? -1 : 1);
  //     }
  //   }
  
  //   return products;
  // }
  
}
