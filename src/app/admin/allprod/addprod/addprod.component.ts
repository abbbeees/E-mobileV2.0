import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.scss']
})
export class AddprodComponent {
  image:any ;
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
  
  message: any;
  imagePath: any;
  imgURL: any;
constructor(private productService:ProductService){
}
onSubmit() {
  this,this.productService.createProduct(this.product,this.image)
  console.log('Form submitted:', this.product);
}

onFileSelected(event: any) {
  if (event.target.files.length > 0)
  {
    const file = event.target.files[0];
    this.image = file;
    // this.f['profile'].setValue(file);

    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();

    this.imagePath = file;
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }


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