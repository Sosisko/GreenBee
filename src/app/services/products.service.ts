import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FbCreateResponse, Product } from '../models/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
category!: string

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${environment.fbDbUrl}/products.json`)
    .pipe(map((response: {[key: string]:any} ) => {
      return Object.keys(response).map(key => (
        {
          ...response[key],
          id: key,
          date: new Date(response[key].date)
        }
        ))
    }))
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post(`${environment.fbDbUrl}/products.json` , product)
    //@ts-ignore //странная ошибка ts
    .pipe(map((response: FbCreateResponse) => {
      return {
        ...product,
        id: response.name,
        date: new Date(product.date)
      }
    }))
  }



  getById(id:string) {
    return this.http.get(`${environment.fbDbUrl}/products/${id}.json`)
    //@ts-ignore //странная ошибка ts
    .pipe(map((response: Product) => {
      if(response) {
           return {
        ...response,
        id,
        date: new Date(response.date)
      }
      
      } 
      return response
    }))
  }
  
  remove(id:string) {
    return this.http.delete(`${environment.fbDbUrl}/products/${id}.json`)
  }

  update(product: Product) {
    return this.http.patch(`${environment.fbDbUrl}/products/${product.id}.json`, product)
  }

setCategory (category: string) {
  this.category = category
}
    
  
}
