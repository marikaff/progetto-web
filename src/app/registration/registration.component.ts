import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements AfterViewInit {

  ngAfterViewInit() {
    // ✅ Togliere il cursore dopo 1.5 secondi
    setTimeout(() => {
      const title = document.querySelector('h1');
      if (title) {
        title.classList.add('no-cursor');
      }
    }, 1500); 

    // ✅ Validazione del form con prevenzione dell'invio via GET
    const form = document.querySelector("form") as HTMLFormElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const confirmPasswordInput = document.getElementById("confirmPassword") as HTMLInputElement;

    if (!form || !emailInput || !passwordInput || !confirmPasswordInput) {
      console.error("Errore: Elementi del modulo non trovati.");
      return;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault(); // 🔥 BLOCCA l'invio del form per evitare che i dati finiscano nell'URL

      let valid = true;

      // Controllo email
      const emailValue = emailInput.value.trim();
      if (!emailValue.endsWith("@studenti.unical.it")) {
        alert("❌ L'email deve essere del dominio @studenti.unical.it.");
        valid = false;
      }

      // Controllo password (minimo 8 caratteri, una maiuscola, una minuscola, un numero e un carattere speciale)
      const passwordValue = passwordInput.value;
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

      if (!passwordRegex.test(passwordValue)) {
        alert("❌ La password deve avere almeno 8 caratteri, una lettera maiuscola, una minuscola, un numero e un carattere speciale.");
        valid = false;
      }

      // Controllo conferma password
      if (passwordValue !== confirmPasswordInput.value) {
        alert("❌ Le password non coincidono.");
        valid = false;
      }

      if (valid) {
        alert("✅ Registrazione completata con successo!");
      }
    });
  }
}