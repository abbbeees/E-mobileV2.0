import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor() {
    this.username = '';
    this.password = '';
  }

  login() {
    // Ajoutez ici la logique de gestion de la connexion
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
