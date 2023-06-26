import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/interfaces';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss'],
})
export class AddPageComponent implements OnInit {
  form!: FormGroup;
  product: any;
  submitted = false;

  options: any = [];

  constructor(private productsService: ProductsService) {}

  //Если ввести отрицательное число, оно автоматически заменяется на 1
  checkValue(event: any) {
    if (event.target.value < 1) {
      event.target.value = 1;
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      price: new FormControl(null),
      category: new FormControl(null, Validators.required),
      measureValue: new FormControl(null),
      measureQantity: new FormControl(null),
      measurePrice: new FormControl(null),
    });
  }

  //Добавляем дополнительные параметры в продукт (мера, цена)
  addOption() {
    if (
      this.form.value.measureValue &&
      this.form.value.measureQantity &&
      this.form.value.measurePrice > 0
    ) {
      this.options.push({
        measureValue: this.form.value.measureValue,
        measureQantity: this.form.value.measureQantity,
        measurePrice: this.form.value.measurePrice,
      });
      console.log(this.options);
    } else {
      this.options = [];
      console.log('Введите корректные данные');
    }
  }
  //Удаляет опции
  delOption(option:any) {
    const optionIndex = this.options.findIndex(
      (item:any) => item.id === option.id
    );
    if (optionIndex !== -1) {
      this.options.splice(optionIndex, 1);
    }
    console.log(this.options);
  }

  //Метод очистки инпутов при нажатии на кнопку "Очистить"
  clearOption() {
    this.form.patchValue({
      measureValue: null,
      measureQantity: null,
      measurePrice: null,
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;

    const product: Product = {
      title: this.form.value.title,
      image: this.form.value.image,
      description: this.form.value.description,
      price: this.options.length > 0 ? this.options[0].measurePrice : this.form.value.price,
      category: this.form.value.category,
      options: this.options,
      date: new Date(),
    };
    this.productsService.addProduct(product).subscribe(() => {
      this.form.reset();
      this.submitted = false;
      this.options = [];
    });
    console.log(product);
    this.product = product;
  }
}
