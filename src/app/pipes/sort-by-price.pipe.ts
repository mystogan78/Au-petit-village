import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'sortByPrice',
  standalone: true,
  pure: false // Rendre le pipe impur pour détecter les changements
})
export class SortByPricePipe implements PipeTransform {

  transform(products: Product[], order: string = 'asc'): Product[] {
    if (!products || products.length === 0) return [];
    return products.sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }
}
