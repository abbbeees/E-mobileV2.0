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
  createProduct(product: any,file:File) {
    const formData = new FormData();
    formData.append('file', file);
  
    let id= this.http.post<any>(BASIC_URL ,product).toPromise()
    .then(id => this.http.post<any>(BASIC_URL+"/image/"+id, formData).toPromise())
      .then(product => product)
      .catch(error => alert("There was an error: "+error.message()));
  }
  deleteProduct(id: number){
    return this.http.delete<any>(BASIC_URL+"/delete/"+id);
  }
  updatProduct(product: any){
    return this.http.put<any>(BASIC_URL+'/edit/'+product.productId,product);
  }
}
