import { Component } from '@angular/core';

@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.scss']
})
export class AddprodComponent {
  product: Product = {
    name: '',
    category: '',
    quantity: 0,
    price: 0,
    company: '',
    img: '',
    storage: '',
    description: ''
  };

onSubmit() {
  console.log('Form submitted:', this.product);
}

onFileSelected(event: any) {
  console.log('File selected:', event.target.files);
}
}

// Interface or model for the product
interface Product {
name: string;
category: string;
quantity: number;
price: number;
company: string,
img: string,
storage: string,
description: string,
}