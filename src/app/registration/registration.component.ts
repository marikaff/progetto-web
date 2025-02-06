import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements AfterViewInit {

  @ViewChild('email') emailInput!: ElementRef;
  @ViewChild('nome') nomeInput!: ElementRef;
  @ViewChild('cognome') cognomeInput!: ElementRef;
  @ViewChild('password') passwordInput!: ElementRef;
  @ViewChild('confirmPassword') confirmPasswordInput!: ElementRef;
  @ViewChild('corsoDiStudio') corsoDiStudioInput!: ElementRef;

  constructor(private authService: AuthService) {}

  ngAfterViewInit() {
    setTimeout(() => {
      const title = document.querySelector('h1');
      if (title) {
        title.classList.add('no-cursor');
      }
    }, 1500);

    const form = document.querySelector("form") as HTMLFormElement;

    if (!form) {
      console.error("Errore: Elementi del modulo non trovati.");
      return;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      let valid = true;

      const emailValue = this.emailInput.nativeElement.value.trim();
      if (!emailValue.endsWith("@studenti.unical.it")) {
        alert("❌ L'email deve essere del dominio @studenti.unical.it.");
        valid = false;
      }

      const passwordValue = this.passwordInput.nativeElement.value;
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
      if (!passwordRegex.test(passwordValue)) {
        alert("❌ La password deve avere almeno 8 caratteri, una lettera maiuscola, una minuscola, un numero e un carattere speciale.");
        valid = false;
      }

      if (passwordValue !== this.confirmPasswordInput.nativeElement.value) {
        alert("❌ Le password non coincidono.");
        valid = false;
      }

      if (valid) {
        const nomeValue = this.nomeInput.nativeElement.value;
        const cognomeValue = this.cognomeInput.nativeElement.value;
        const corsoDiStudioValue = this.corsoDiStudioInput.nativeElement.value;

        this.authService.register(emailValue, nomeValue, cognomeValue, passwordValue, corsoDiStudioValue).subscribe(
          response => {
            console.log('Registrazione avvenuta con successo:', response);
            alert("✅ Registrazione completata con successo!");
          },
          error => {
            console.error('Errore durante la registrazione:', error);
            alert("❌ Errore nella registrazione, riprova.");
          }
        );
      }
    });
  }
}