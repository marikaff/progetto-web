import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements AfterViewInit {
  @ViewChild('email') emailInput!: ElementRef;
  @ViewChild('password') passwordInput!: ElementRef;
  @ViewChild('confirmPassword') confirmPasswordInput!: ElementRef;

  constructor(private authService: AuthService, private router: Router) {}

  ngAfterViewInit() {
    setTimeout(() => {
      const title = document.querySelector('h1');
      if (title) {
        title.classList.add('no-cursor');
      }
    }, 1500);
  }

  register(event: Event) {
    event.preventDefault(); // 🔥 Evita il refresh della pagina

    const emailValue = this.emailInput.nativeElement.value.trim();
    const passwordValue = this.passwordInput.nativeElement.value;
    const confirmPasswordValue = this.confirmPasswordInput.nativeElement.value;

    // ✅ Controllo email
    if (!emailValue.endsWith("@studenti.unical.it")) {
      alert("❌ L'email deve essere del dominio @studenti.unical.it.");
      return;
    }

    // ✅ Controllo password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(passwordValue)) {
      alert("❌ La password deve avere almeno 8 caratteri, una maiuscola, una minuscola, un numero e un carattere speciale.");
      return;
    }

    // ✅ Controllo conferma password
    if (passwordValue !== confirmPasswordValue) {
      alert("❌ Le password non coincidono.");
      return;
    }

    // 🔥 INVIA AL BACKEND
    this.authService.register({ email: emailValue, password: passwordValue }).subscribe(
      response => {
        console.log("Registrazione riuscita:", response);
        alert("✅ Registrazione completata con successo!");
        this.router.navigate(['/login']); // 🔄 Redirect alla pagina di login
      },
      error => {
        console.error("Errore nella registrazione:", error);
        alert("❌ Errore durante la registrazione. Riprova.");
      }
    );
  }
}