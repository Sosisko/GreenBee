import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/models/interfaces';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit {
  form!: FormGroup;
  product!: Product;
  loading: boolean = true;
  submitted = false;
  options: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService
  ) {}

  //Если ввести отрицательное число в опциях, оно автоматически заменяется на 1
  checkValue(event: any) {
    if (event.target.value < 0) {
      event.target.value = 0;
    }
  }

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params) => {
          return this.productService.getById(params['id']);
        })
      )
      .subscribe((product) => {
        this.product = product;
        //console.log(this.product.options);

        const optionsFormArray = new FormArray<FormGroup>([]);
        if (this.product.options && this.product.options.length > 0) {
          this.product.options.map((option: any) => {
           // console.log(option);
            
            const optionGroup = new FormGroup({
              measureValue: new FormControl(option.measureValue),
              measureQantity: new FormControl(option.measureQantity),
              measurePrice: new FormControl(option.measurePrice),
            });
            optionsFormArray.push(optionGroup);
            this.options = optionsFormArray.value;
            //console.log(this.options);
            
          });
        } else {}
          this.form = new FormGroup({
            title: new FormControl(this.product.title, Validators.required),
            image: new FormControl(this.product.image, Validators.required),
            description: new FormControl(
              this.product.description,
              Validators.required
            ),
            price: new FormControl(this.product.price, Validators.required),
            category: new FormControl(
              this.product.category,
              Validators.required
            ),
            options: optionsFormArray,
            measureValue: new FormControl(),
            measureQantity: new FormControl(),
            measurePrice: new FormControl(),
            // measureValue: new FormControl(this.product.options.measureValue),
            // measureQantity: new FormControl(this.product.options.measureQantity),
            // measurePrice: new FormControl(this.product.options.measurePrice),
          });
          this.loading = false;
        
      });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    this.productService
      .update({
        ...this.product,
        title: this.form.value.title,
        image: this.form.value.image,
        description: this.form.value.description,
        price: this.options.length > 0 ? this.options[0].measurePrice : this.form.value.price,
        category: this.form.value.category,
        options: this.options,
        date: new Date(),
      })
      .subscribe((res) => {
        this.form.reset();
        this.submitted = false;
        this.router.navigate(['/admin', 'dashboard']);
      });
  }

  //Добавляем дополнительные параметры в продукт (мера, цена)
  addOption() {
    if (!this.options) {
      this.options = [];
    }
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
  delOption(option: any, event: any) {
    event.preventDefault();
    const optionIndex = this.options.findIndex(
      (item: any) => item.id === option.id
    );
    if (optionIndex !== -1) {
      this.options.splice(optionIndex, 1);
    }
    //console.log(this.options);
  }

  //Метод очистки инпутов при нажатии на кнопку "Очистить"
  clearOption() {
    //this.options = [];
    this.form.patchValue({
      measureValue: null,
      measureQantity: null,
      measurePrice: null,
    });
  }
}
