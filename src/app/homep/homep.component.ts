import { Component, OnInit, ViewChild } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';
import { IgxCarouselComponent, IgxSlideComponent } from 'igniteui-angular';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FootbarComponent } from '../footbar/footbar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
import { IgxCarouselModule } from 'igniteui-angular';

@Component({
  selector: 'app-homep',
  templateUrl: './homep.component.html',
  styleUrls: ['homep.component.scss'],
  standalone: true,
  imports: [
    HammerModule,
    RouterModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    IgxCarouselModule
  ]
})
export class HomepComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  @ViewChild(IgxCarouselComponent) carousel: IgxCarouselComponent | undefined; // Adjust the selector based on your configuration

  carous = [
    { image: '../assets/image/carousel/oppo.jpg' },
    { image: '../assets/image/carousel/iphone.jpg' },
    { image: '../assets/image/carousel/samsung.jpg' }
  ];

  ngOnInit(): void {
    // Initialize the Carousel here if necessary
  }

  openlogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: 'auto',
      height: 'auto',
    });
  }
}
