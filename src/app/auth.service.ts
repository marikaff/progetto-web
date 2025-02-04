import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): boolean {
    // Implementa la logica di autenticazione (può essere una chiamata API)
    // Per esempio, salva un token nel localStorage o sessionStorage
    localStorage.setItem('user', 'true');  // Simula un login
    return true;
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}
