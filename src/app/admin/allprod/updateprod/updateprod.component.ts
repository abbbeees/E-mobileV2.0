import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';

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

@Component({
  selector: 'app-updateprod',
  templateUrl: './updateprod.component.html',
  styleUrls: ['./updateprod.component.scss']
})
export class UpdateprodComponent {
  image:any
  
  product: Product; // Declare the property here, remove the duplicate declaration below

  constructor(private productService:ProductService,
    public dialogRef: MatDialogRef<UpdateprodComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product // Use data instead of product
  ) {
    // Assign the data to the product property
    this.product = { ...data }; // Using spread operator to create a copy
  }

  onSubmit() {
    this.productService.updatProduct(this.product).subscribe((result)=>{
      console.log("product updated");
      
    })
  }

  onFileSelected(event: any) {
    console.log('File selected:', event.target.files);
  }
}
