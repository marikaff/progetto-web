import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/'; // Cambia con il tuo backend

  constructor(private http: HttpClient) {}

  // ✅ LOGIN
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/doLogin`, { email, password });
  }

  // ✅ REGISTRAZIONE 
  register(email: string, nome: string, cognome: string, password: string, corsoDiStudio: number): Observable<any> {
    const userData = { email, nome, cognome, password, corsoDiStudio };
    return this.http.post(`${this.apiUrl}/registrazione`, userData);
  }

  // ✅ LOGOUT
  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('token');
  }

  // ✅ CONTROLLO SE L'UTENTE È LOGGATO
  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}