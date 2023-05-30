import { Injectable } from '@angular/core';
import { Product } from '../models/interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts: Product[] = JSON.parse(
    localStorage.getItem('cartProducts') || '[]'
  );

  productCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);


  constructor() {
    const productCount = JSON.parse(
      localStorage.getItem('productCount') || '0'
    );
    this.productCount = new BehaviorSubject<number>(productCount);
  }

  updateQuantity(product: Product, newQuantity: number | undefined) {
    const updatedProduct = { ...product, quantity: newQuantity };
    const productIndex = this.cartProducts.findIndex(
      (item) => item.id === product.id
    );
    if (productIndex !== -1) {
      this.cartProducts.splice(productIndex, 1, updatedProduct);
      localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
      localStorage.setItem(
        'productCount',
        JSON.stringify(this.productCount.getValue())
      );

      console.log('Количество товара обновлено!');
    } else {
      console.log('Этого товара нет в корзине!');
      return;
    }
  }

  // //Метод every будет проверять каждый элемент массива и вернет true,
  // // если все элементы не соответствуют условию в колбэке, и false - если найден элемент,
  // // у которого совпадает id. Таким образом, если idExists равно true,
  // // значит продукта с таким же id в массиве нет и можно добавлять новый,
  // // иначе выведется сообщение "Этот товар уже есть в корзине!".
  addProductToCart(product: Product) {
    const idExists = this.cartProducts.every((item) => item.id !== product.id);
    if (idExists) {
      this.cartProducts.push(product);
      this.productCount.next(this.cartProducts.length);
      localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
      localStorage.setItem(
        'productCount',
        JSON.stringify(this.productCount.getValue())
      );

      console.log('Товар добавлен в корзину!');
    } else {
      console.log('Этот товар уже есть в корзине!');
      return;
    }
  }

  removeProductFromCart(product: Product) {
    const productIndex = this.cartProducts.findIndex(
      (item) => item.id === product.id
    );

    if (productIndex !== -1) {
      this.cartProducts.splice(productIndex, 1);
      this.productCount.next(this.cartProducts.length);
      localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
      localStorage.setItem(
        'productCount',
        JSON.stringify(this.productCount.getValue())
      );

      console.log('Товар удален из корзины!');
    } else {
      console.log('Этого товара нет в корзине!');
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
