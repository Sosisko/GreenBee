import { EventEmitter, Injectable, Output } from '@angular/core';
import { Product } from '../models/interfaces';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // cartProducts: Product[] = [];
  // productCount = 0;

  // constructor() {}

  // //Метод every будет проверять каждый элемент массива и вернет true,
  // // если все элементы не соответствуют условию в колбэке, и false - если найден элемент,
  // // у которого совпадает id. Таким образом, если idExists равно true,
  // // значит продукта с таким же id в массиве нет и можно добавлять новый,
  // // иначе выведется сообщение "Этот товар уже есть в корзине!".
  // addProductToCart(product: Product) {
  //   const idExists = this.cartProducts.every((item) => item.id !== product.id);
  //   if (idExists) {
  //     this.cartProducts.push(product);
  //     this.productCount = this.cartProducts.length;
  //     console.log(this.productCount);
  //     console.log('Товар добавлен в корзину!');
  //   } else {
  //     console.log('Этот товар уже есть в корзине!');
  //     return;
  //   }
  // }
  cartProducts: Product[] = [];
  productCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  addProductToCart(product: Product) {
    const idExists = this.cartProducts.every((item) => item.id !== product.id);
    if (idExists) {
      this.cartProducts.push(product);
      this.productCount.next(this.cartProducts.length);
      console.log('Товар добавлен в корзину!');
    } else {
      console.log('Этот товар уже есть в корзине!');
      return;
    }
  }

  getProductCount() {
    return this.productCount.getValue();
  }

  getProductCountObservable() {
    return this.productCount.asObservable();
  }
}
