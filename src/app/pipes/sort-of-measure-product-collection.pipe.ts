import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortOfMeasureProductCollection',
})
export class SortOfMeasureProductCollectionPipe implements PipeTransform {
transform(products: any, measureFilters: string[]) {
  let result = [];

  if (!measureFilters || measureFilters.length === 0) {
    return products;
  } else {
    result = products.filter((product:any) => {
      // Check if `product.options` exists and has at least one item
      return product.options && product.options.length > 0 && product.options.some((option:any) =>
        measureFilters.includes(option.measureQantity + option.measureValue)
      );
    });
  }
  console.log(result);
  return result;
}

}
