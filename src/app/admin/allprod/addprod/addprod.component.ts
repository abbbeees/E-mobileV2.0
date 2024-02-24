import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.scss']
})
export class AddprodComponent {
  product: Product = {
  productName: '',
  productPrice: 0,
  company: '',
  categoryType: 0,
  productIcon: '',
  storage: '',
  productStock: 0,
  productDescription: '',
  productStatus:0

  };
constructor(private productService:ProductService){
}
onSubmit() {
  this,this.productService.createProduct(this.product).subscribe(
    (result)=>{
    console.log('Product added ');
  },
  (error)=>{
    console.log('error when adding product');
  }

  )
  console.log('Form submitted:', this.product);
}

onFileSelected(event: any) {
  console.log('File selected:', event.target.files);
}
}

// Interface or model for the product
interface Product {
  productName: string;
  productPrice: number;
  company: string;
  categoryType: number;
  productIcon: string;
  storage: string;
  productStock: number;
  productDescription: string;
  productStatus:number;
}