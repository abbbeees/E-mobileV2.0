import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProdFilterComponent } from './prodfilter/prodfilter.component';
import { ProddetComponent } from './proddet/proddet.component';

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
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  searchText='';

  products: Product[] = [
    {
      id: 1,
      name: "Iphone 15 pro Max",
      price: 1350,
      company: "Apple",
      category:"Smartphone",
      img: "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2023/09/iphone-15-pro-max-768x768.png?avif=1&key=6d7ed62f",
      storage: "256GB, 512GB, 1To",
      quantity: 10,
      description:"produit 1 details",
    },
    {
      id: 2,
      name: "Samsung S23 Ultra",
      price: 1150,
      company: "Samsung",
      category:"Smartphone",
      img: "https://c0.lestechnophiles.com/www.frandroid.com/wp-content/uploads/2023/01/samsung-galaxy-s23-ultra-frandroid-2023.png?avif=1&key=05a3a6ac",
      storage: "256GB, 512GB, 1To",
      quantity: 10,
      description:"produit 2 details",
    },
    {
      id: 3,
      name: "Google Pixel 7a",
      price: 600,
      company: "Google",
      category:"Smartphone",
      img: "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2023/05/google-pixel-7a-frandroid-2023-1-768x768.png?avif=1&key=6f28dc03",
      storage: "256GB, 512GB",
      quantity: 10,
      description:"produit 3 details",
    },
    {
      id: 4,
      name: "Iphone 15 pro Max",
      price: 1350,
      company: "Apple",
      category:"Smartphone",
      img: "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2023/09/iphone-15-pro-max-768x768.png?avif=1&key=6d7ed62f",
      storage: "256GB, 512GB, 1To",
      quantity: 10,
      description:"produit 4 details",
    },
    {
      id: 5,
      name: "Samsung S23 Ultra",
      price: 1150,
      company: "Samsung",
      category:"Smartphone",
      img: "https://c0.lestechnophiles.com/www.frandroid.com/wp-content/uploads/2023/01/samsung-galaxy-s23-ultra-frandroid-2023.png?avif=1&key=05a3a6ac",
      storage: "256GB, 512GB, 1To",
      quantity: 10,
      description:"produit 5 details",
    },
    {
      id: 6,
      name: "Samsung S23 Ultra",
      price: 1150,
      company: "Samsung",
      category:"Smartphone",
      img: "https://c0.lestechnophiles.com/www.frandroid.com/wp-content/uploads/2023/01/samsung-galaxy-s23-ultra-frandroid-2023.png?avif=1&key=05a3a6ac",
      storage: "256GB, 512GB, 1To",
      quantity: 10,
      description:"produit 6 details",
    },
  
  ];
  

  constructor(public dialog: MatDialog) {}


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
