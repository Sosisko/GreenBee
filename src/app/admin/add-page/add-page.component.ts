import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/interfaces';
import { AlertService } from 'src/app/services/alert.service';
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

  constructor(private productsService: ProductsService, private alertService: AlertService) {}

  //Если ввести отрицательное число, оно автоматически заменяется на 1
  checkValue(event: any) {
    if (event.target.value < 0) {
      event.target.value = 0;
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      discount: new FormControl(null),
      category: new FormControl(null, Validators.required),
      measureValue: new FormControl(null),
      measureQantity: new FormControl(null),
      measurePrice: new FormControl(null),
    });
  }

  //Добавляем дополнительные параметры в продукт (мера, цена)
  addOption() {
    //Проверяем, если в массиве уже есть одна мера (Кг или Литры), то не даём добавить разные меры
    const measureValue = this.form.value.measureValue;
    const measureValueExists = this.options.some(
      (option: any) => option.measureValue !== measureValue
    );

    //Проверяем, если в масиве уже есть количество меры, то не даём добавить одинаковые значения меры
    const measureQantity = this.form.value.measureQantity;
    const measureQantityExists = this.options.some(
      (option: any) => option.measureQantity === measureQantity
    );

    if (measureValue && this.form.value.measurePrice > 0) {
      if (!measureQantityExists && !measureValueExists) {
        this.options.push({
          measureValue: this.form.value.measureValue,
          measureQantity: this.form.value.measureQantity,
          measurePrice: this.form.value.measurePrice,
        });
        this.alertService.success('Опция добавлена');
      } else if (measureValueExists) {
        this.alertService.warning('Вы можете выбрать только один тип меры');
      } else if (measureQantityExists) {
        this.alertService.warning('Опция с таким параметром уже существует, выберите другой вес или объём');
       
      }
    } else {
      this.alertService.success('Введите все данные');
    }
  }
  //Удаляет опции
  delOption(option: any) {
    const optionIndex = this.options.indexOf(option);
    if (optionIndex !== -1) {
      this.options.splice(optionIndex, 1);
      this.alertService.danger('Опция удалена');
    }
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
      price:
        this.options.length > 0
          ? this.options[0].measurePrice
          : this.form.value.price,
      discount: this.form.value.discount,    
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
