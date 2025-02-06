import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('email') emailInput!: ElementRef;
  @ViewChild('password') passwordInput!: ElementRef;

  constructor(private authService: AuthService) {}

  ngAfterViewInit() {
    setTimeout(() => {
      const title = document.querySelector('h1');
      if (title) {
        title.classList.add('no-cursor');
      }
    }, 1500);
  }

  login(event: Event) {
    event.preventDefault(); // Evita il refresh della pagina

    const username = this.emailInput.nativeElement.value;
    const password = this.passwordInput.nativeElement.value;

    // Controlla se l'email contiene '@studenti.unical.it'
    if (!username.endsWith('@studenti.unical.it')) {
      alert('L\'email deve essere del dominio @studenti.unical.it');
      return; // Esce dalla funzione senza inviare la richiesta
    }

    // Procedi con il login se la validazione dell'email è passata
    this.authService.login(username, password).subscribe(
      response => {
        console.log('Login success:', response);
        localStorage.setItem('isLoggedIn', 'true');
        alert('Login successful!');
        // Redirect alla home
      },
      error => {
        console.error('Login failed:', error);
        alert('Credenziali errate!');
      }
    );
  }
}
