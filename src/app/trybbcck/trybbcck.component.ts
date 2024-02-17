import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CasepopupComponent } from './casepopup/casepopup.component';

@Component({
  selector: 'app-trybbcck',
  templateUrl: './trybbcck.component.html',
  styleUrls: ['./trybbcck.component.scss']
})
export class trybbcckComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  casemd(): void {
    const dialogRef = this.dialog.open(CasepopupComponent, {
      width: '750px',
      height: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    const interBubble = document.querySelector<HTMLDivElement>('.interactive');
    
    if (interBubble) {
      let curX = 0;
      let curY = 0;
      let tgX = 0;
      let tgY = 0;

      function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;

        // Check if interBubble is not null before accessing its properties
        if (interBubble) {
          interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        }

        requestAnimationFrame(() => {
          move();
        });
      }

      window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
      });

      move();
    }
  }
}
