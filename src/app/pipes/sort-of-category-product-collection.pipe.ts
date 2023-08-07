import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortOfCategoryProductCollection',
})
export class SortOfCategoryProductCollectionPipe implements PipeTransform {
  transform(products: any, categoryFilters: string[]): any {
    let result = [];
    
    if (!categoryFilters || categoryFilters.length === 0) {
      return products;
    } else {
      result = products.filter((product: any) =>
        categoryFilters.includes(product.category)
      );
    }
   
    return result;
  }
}

//   let result = [];
//   if (!categoryFilters || categoryFilters.length === 0) {
//     result = products.filter((product:any) => product.category === "Fruits" );
//   }
//   console.log(result);
//   return result;
// }
