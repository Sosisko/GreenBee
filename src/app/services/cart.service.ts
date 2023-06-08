import { Injectable, OnInit } from '@angular/core';
import { Product } from '../models/interfaces';
import { BehaviorSubject } from 'rxjs';
import { AlertService } from './alert.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogAddCartComponent } from '../shared/dialog-add-cart/dialog-add-cart.component';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  cartProducts: Product[] = JSON.parse(
    localStorage.getItem('cartProducts') || '[]'
  );

  productCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalPrice$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalQuantity$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private alertService: AlertService, public dialog: MatDialog) {
    const productCount = JSON.parse(
      localStorage.getItem('productCount') || '0'
    );
    this.productCount = new BehaviorSubject<number>(productCount);
    this.updateTotal();
  }

  ngOnInit() {}

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
      this.updateTotal();
      console.log('Количество товара обновлено!');
    } else {
      console.log('Этого товара нет в корзине!');
      return;
    }
  }

  openDialog(product: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      product: product,
      totalQuantity$: this.totalQuantity$,
      totalPrice$: this.totalPrice$
    }; // передаем product в data

    dialogConfig.width = '600px';
    this.dialog.open(DialogAddCartComponent, dialogConfig);
    //console.log(dialogConfig);
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
      this.updateTotal();
      this.openDialog(product); //Диалоговое окно с сообщением, что товар добавлен
      this.alertService.success('Товар добавлен в корзину');
      //console.log('Товар добавлен в корзину!');
    } else {
      this.alertService.warning('Этот товар уже есть в корзине!');
      //console.log('Этот товар уже есть в корзине!');
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
      this.updateTotal();
      this.alertService.danger('Товар удален из корзины!');
      //console.log('Товар удален из корзины!');
    } else {
      console.log('Этого товара нет в корзине!');
      return;
    }
  }

  updateTotal() {
    const totalPrice = this.cartProducts.reduce(
      //@ts-ignore
      (total, product) => total + product.quantity * product.price,
      0
    );
    // Обновляем значение totalPrice в BehaviorSubject
    this.totalPrice$.next(totalPrice);
    //Считаем общее количество товаров в корзине
    const totalQuantity = this.cartProducts.reduce(
      //@ts-ignore
      (total, product) => total + product.quantity,
      0
    );
    // Обновляем значение totalPrice в BehaviorSubject
    this.totalQuantity$.next(totalQuantity);
  }

  getProductCount() {
    return this.productCount.getValue();
  }
  getProductCountObservable() {
    return this.productCount.asObservable();
  }
}
