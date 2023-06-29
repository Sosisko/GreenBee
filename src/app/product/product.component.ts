import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from '../models/interfaces';
import { CartService } from './../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product$!: Observable<any>;
  quantity: number = 1;
  measureQantity: any;
  selectedOptions: any;
  measurePrice = null;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.product$ = this.route.params.pipe(
      switchMap((params) => {
        return this.productsService.getById(params['id']);
      })
    );
    //Таким образом, при получении данных о продукте из сервиса,
    //переменная "selectedOption" будет установлена равной значению
    //первого элемента массива "product.option", а также переменная "price"
    //будет установлена равной цене первого элемента массива "product.option".
    //Это позволит активировать первый инпут по умолчанию и отображать соответствующую цену.
    this.product$.subscribe((product) => {
      if (product.options) {
        this.measureQantity = product.options[0].measureQantity;
        this.measurePrice = product.options[0].measurePrice;
        this.selectedOptions = {
          measurePrice: product.options[0].measurePrice,
          measureQantity: product.options[0].measureQantity,
          measureValue: product.options[0].measureValue
        };
        console.log(this.selectedOptions);
      }
    });
  }

  onChange(option: any) {
    this.measurePrice = option.measurePrice;
    this.selectedOptions = option;
    console.log(this.selectedOptions);
  }

  decreaseQuantity() {
    if (this.quantity !== undefined && this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    if (this.quantity !== undefined) {
      this.quantity++;
    }
  }

  // Создается новый объект cartProduct, который содержит все свойства продукта,
  // а также выбранную цену this.measurePrice и количество this.quantity.
  // Затем этот объект передается в метод addProductToCart сервиса корзины.
  addProduct(product: Product) {
    const cartProduct: any = {
      ...product,
      options: this.selectedOptions,
      price: this.measurePrice ? this.measurePrice : product.price,
      quantity: this.quantity,
    };
    console.log(cartProduct);

    this.cartService.addProductToCart(cartProduct);
    this.quantity = 1;
  }

  // addProduct(product: Product) {
  //   if (this.selectedOption) {
  //     const selectedOption = product.options.find((option:any) => option.measureQuantitiy === this.selectedOption);
  //     if (!selectedOption) {
  //       const cartProduct: any = {
  //         ...product,
  //         price: selectedOption.measurePrice,
  //         quantity: this.quantity,
  //         options: [selectedOption]
  //       };
  //       console.log(cartProduct);
  //       this.cartService.addProductToCart(cartProduct);
  //     }

  //   } else {
  //     const cartProduct: any = {
  //       ...product,
  //       price: this.measurePrice ? this.measurePrice : product.price,
  //       quantity: this.quantity
  //     };
  //     this.cartService.addProductToCart(cartProduct);
  //   }
  //   this.quantity = 1;
  // }
}
