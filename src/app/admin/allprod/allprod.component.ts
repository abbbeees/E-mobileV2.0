import { Component } from '@angular/core';
import { AddprodComponent } from './addprod/addprod.component';
import { UpdateprodComponent } from './updateprod/updateprod.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';
export interface Product {
  id: number;
  name: string;
  price: number;
  company: string;
  category: string;
  img: string;
  storage: string;
  quantity: number;
  description: string;
}

@Component({
  selector: 'app-allprod',
  templateUrl: './allprod.component.html',
  styleUrls: ['./allprod.component.scss'],
  
})
export class AllprodComponent {
  searchText = '';
  id = 0;
  constructor(public dialog: MatDialog) {}

data = [
  { id: 1, category: 'smartphone', name: 'Iphone 14', quantity: 3, price: 1000, company:'apple', storage:'265GB', description:'iphoni al jamiil',img:''},
  { id: 2, category: 'smartphone', name: 'Iphone 15 Pro Max', quantity: 15, price: 1500, company:'apple', storage:'512GB', description:'abcd',img:''},
  { id: 3, category: 'accessoire', name: 'behringer Kit', quantity: 5, price: 1000, company:'behringer', storage:'0', description:'kit',img:'' },
];

updateProduct(product: Product) {
  this.updProducts(product);
  console.log('Update Product with ID:', product.id);
}


deleteProduct(id: number) {
  console.log('Delete Product with ID:',id);
}

addProducts(): void {
  const dialogRef = this.dialog.open(AddprodComponent, {
    width: '350px',
    height: '550px',
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });

  // Implement your logic to add products
  console.log('Add Products clicked');
}

updProducts(product: Product): void {
  const dialogRef = this.dialog.open(UpdateprodComponent, {
    width: '350px',
    height: '550px',
    data: product // Pass product data to the dialog
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });

  console.log('Update Products clicked');
}


}