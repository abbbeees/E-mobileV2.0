import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Product {
  name: string;
  category: string;
  quantity: number;
  price: number;
  company: string;
  img: string;
  storage: string;
  description: string;
}

@Component({
  selector: 'app-updateprod',
  templateUrl: './updateprod.component.html',
  styleUrls: ['./updateprod.component.scss']
})
export class UpdateprodComponent {
  product: Product; // Declare the property here, remove the duplicate declaration below

  constructor(
    public dialogRef: MatDialogRef<UpdateprodComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product // Use data instead of product
  ) {
    // Assign the data to the product property
    this.product = { ...data }; // Using spread operator to create a copy
  }

  onSubmit() {
    console.log('Form submitted:', this.product);
  }

  onFileSelected(event: any) {
    console.log('File selected:', event.target.files);
  }
}
