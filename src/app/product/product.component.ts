import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product$!: Observable<any>

  constructor(private productsService: ProductsService, private route: ActivatedRoute) {}


  ngOnInit(){
    this.product$ = this.route.params.pipe((switchMap(params => {
      return this.productsService.getById(params['id'])
    })))
  }
}
