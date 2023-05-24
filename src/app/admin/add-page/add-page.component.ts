import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, ReplaySubject } from 'rxjs';
import { Product } from 'src/app/models/interfaces';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss'],
})
export class AddPageComponent implements OnInit {
  form!: FormGroup;
  product: any
  submitted = false;

  constructor(private productsService: ProductsService){}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
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
      price: this.form.value.price,
      category: this.form.value.category,
      date: new Date()
    }
    this.productsService.addProduct(product).subscribe(()=>{
      this.form.reset()
    })
    console.log(product);
    this.product = product
  }
}
