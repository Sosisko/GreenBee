import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params) => {
          return this.productService.getById(params['id']);
        })
      )
      .subscribe((product) => {
        this.product = product;
        this.form = new FormGroup({
          title: new FormControl(this.product.title, Validators.required),
          image: new FormControl(this.product.image, Validators.required),
          description: new FormControl(
            this.product.description,
            Validators.required
          ),
          price: new FormControl(this.product.price, Validators.required),
          category: new FormControl(this.product.category, Validators.required),
        });
        this.loading = false;
      });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;
    
 
    this.productService.update({
      ...this.product,
      title: this.form.value.title,
      image: this.form.value.image,
      description: this.form.value.description,
      price: this.form.value.price,
      category: this.form.value.category,
      date: new Date(),
    }).subscribe((res) => {
      this.form.reset();
      this.submitted = false;
      this.router.navigate(['/admin', 'dashboard'])
    });

  }
}
