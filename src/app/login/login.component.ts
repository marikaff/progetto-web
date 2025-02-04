import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  username: string = '';
  password: string = '';
  credentials = {
    username: 'user@studenti.unical.it', // credenziali di prova
    password: 'password'
  };

  ngAfterViewInit() {
    setTimeout(() => {
      const title = document.querySelector('h1');
      if (title) {
        title.classList.add('no-cursor');
      }
    }, 1500); // 1.5 secondi = durata dell'animazione typing
  }

  login() {
    if (this.username === this.credentials.username && this.password === this.credentials.password) {
      // Salva nel localStorage che l'utente è loggato
      localStorage.setItem('isLoggedIn', 'true');
      alert('Login successful!');
      // Reindirizza alla home o pagina principale
      // window.location.href = '/home'; // Usa il router di Angular per il reindirizzamento
    } else {
      alert('Credenziali errate!');
    }
  }

  checkLoginStatus() {
    // Verifica se l'utente è loggato
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      // L'utente è già loggato
      // Redirect a pagina principale (esempio: home)
      // window.location.href = '/home';
    }
  }

  ngOnInit() {
    this.checkLoginStatus();
  }

}