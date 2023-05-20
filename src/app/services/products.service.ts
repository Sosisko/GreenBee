import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FbCreateResponse, Product } from '../models/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

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

  getAll() {
    return this.http.get(`${environment.fbDbUrl}/products.json`)
    .pipe(map((response: {[key: string]:any}) => {
      return Object.keys(response).map(key => (
        {
          ...response[key],
          id: key,
          date: new Date(response[key].date)
        }
        ))
    }))
    
  }
}
