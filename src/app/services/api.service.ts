import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { products } from 'src/model/products';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 //get product by id
  getProductById(productId: number): Observable<products> {
    const url = `https://dummyjson.com/products/${productId}`;
    return this.http.get<products>(url);
  }
  //dependency injection 
  constructor(private http: HttpClient) { }

  //get function to get the data
  getAllProducts(): Observable<{ products: products[] }> {
    return this.http.get<{ products: products[] }>('https://dummyjson.com/products');
  }
}
