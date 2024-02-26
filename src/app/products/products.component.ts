import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProdFilterComponent } from './prodfilter/prodfilter.component';
import { ProddetComponent } from './proddet/proddet.component';
import { ProductService } from '../services/product.service';
import { Product } from '../models/Product';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  searchText='';

  products: Product[] = [];
  

  constructor(public dialog: MatDialog,private productService:ProductService) {}
  ngOnInit(): void {
   this.productService.getAllProducts().subscribe(
    (result)=>{
      this.products=result.content;
    }
   )
  }


  openFilterPopup(): void {
    const dialogRef = this.dialog.open(ProdFilterComponent, {
      width: '350px',
      height: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  opendetails(product: Product): void {
    const dialogRef = this.dialog.open(ProddetComponent, {
      width: '750px',
      height: '720px',
      data: product //mat_data_dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
export { Product };

