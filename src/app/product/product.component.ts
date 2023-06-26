import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { CartProduct, Product } from '../models/interfaces';
import { CartService } from './../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product$!: Observable<any>;
  quantity: number = 1;
  selectedOption: any;
  measurePrice = null

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
        this.selectedOption = product.options[0].measureQantity;
        this.measurePrice = product.options[0].measurePrice;
      }
    });

  }

  onChange(option: any) {
    this.measurePrice = option.measurePrice;
    console.log(option);
    
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

  // addProduct(product: Product) {
  //   product.quantity = this.quantity;
  //   this.cartService.addProductToCart(product);
  //   this.quantity = 1;
  //   console.log(product);
  // }


  //Создается новый объект cartProduct, который содержит все свойства продукта, 
  //а также выбранную цену this.measurePrice и количество this.quantity. 
  //Затем этот объект передается в метод addProductToCart сервиса корзины.
  addProduct(product: Product) {
    const cartProduct: any = {
      ...product,
      price: this.measurePrice,
      quantity: this.quantity
    };
    this.cartService.addProductToCart(cartProduct);
    this.quantity = 1;
  }
}
