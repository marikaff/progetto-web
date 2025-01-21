import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements AfterViewInit {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  ngAfterViewInit() {
    setTimeout(() => {
      const title = document.querySelector('h1');
      if (title) {
        title.classList.add('no-cursor');
      }
    }, 1500); // 1.5 secondi
  }

  onSubmit() {
    if (!this.email.endsWith('@studenti.unical.it')) {
      this.errorMessage = 'L\'email deve terminare con @studenti.unical.it';
      return;
    }
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(this.password)) {
      this.errorMessage = 'La password deve contenere almeno 8 caratteri, una lettera maiuscola, una minuscola, un numero e un carattere speciale';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Le password non corrispondono';
      return;
    }
    
    this.errorMessage = '';
    alert('Registrazione completata con successo!');
  }
}