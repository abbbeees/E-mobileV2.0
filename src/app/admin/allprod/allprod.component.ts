import { Component, OnInit } from '@angular/core';
import { AddprodComponent } from './addprod/addprod.component';
import { UpdateprodComponent } from './updateprod/updateprod.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
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
export class AllprodComponent implements OnInit {
  searchText = '';
  id = 0;
  constructor(public dialog: MatDialog,private productService:ProductService) {}
  ngOnInit(): void {
   this.productService.getAllProducts().subscribe(
    (result)=>{
      this.data=result.content;
    }
   )
  }


data = [

];

updateProduct(product: Product) {
  this.updProducts(product);
  console.log('Update Product with ID:', product.id);
}


deleteProduct(id: number) {
  this.productService.deleteProduct(id).subscribe((result)=>{
    console.log('Delete Product with ID:',id);

  })
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