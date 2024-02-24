import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../products/products.component';
const BASIC_URL = "http://localhost:8080/product";
@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }
  getAllProducts(): Observable<any> {
    return this.http.get<any>(BASIC_URL)
  }
  createProduct(Product: any) {
    return this.http.post(BASIC_URL , Product)}
}
