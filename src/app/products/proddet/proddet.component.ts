import { Component ,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../products.component';

@Component({
  selector: 'app-proddet',
  templateUrl: './proddet.component.html',
  styleUrls: ['./proddet.component.scss']
})
export class ProddetComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public product: Product) { }

  // name: string = 'Iphone 15 Pro Max';
  // category: string = 'Smartphone';
  // brand: string = 'Apple';
  // quantity: number = 10;
  // price: number = 1350;
  // description: string = 'Titane noir, titane blanc, titane bleu, titane naturel Design en titane Face avant Ceramic Shield Dos en verre mat texturé';

}
