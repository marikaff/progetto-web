import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthResponse } from '../models/model'

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = 'http://localhost:8080/api/auth'; // Update with your Spring Boot URL
  
  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  private tokenExpirationTimer: any;

  constructor() {
    this.initializeAuthState();
  }

  private initializeAuthState(): void {
    const storedData = this.getStoredUser();
    if (storedData && storedData.token) {
      const expirationDuration = storedData.expirationDate - new Date().getTime();
      if (expirationDuration > 0) {
        this.currentUserSubject.next(storedData.user);
        this.autoLogout(expirationDuration);
      } else {
        this.clearAuthData();
      }
    }
  }

  login(credentials: { email: string; password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        this.handleAuthentication(
          response.user,
          response.token,
          response.expiresIn
        );
      })
    );
  }

  register(userData: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, userData).pipe(
      tap(response => {
        this.handleAuthentication(
          response.user,
          response.token,
          response.expiresIn
        );
      })
    );
  }

  private handleAuthentication(user: any, token: string, expiresIn: number): void {
    const expirationDate = new Date().getTime() + expiresIn * 1000;
    this.storeAuthData(user, token, expirationDate);
    this.currentUserSubject.next(user);
    this.autoLogout(expiresIn * 1000);
  }

  logout(): void {
    this.clearAuthData();
    this.currentUserSubject.next(null);
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.router.navigate(['/login']);
  }

  private autoLogout(expirationDuration: number): void {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private storeAuthData(user: any, token: string, expirationDate: number): void {
    localStorage.setItem('userData', JSON.stringify({
      user,
      token,
      expirationDate
    }));
  }

  private clearAuthData(): void {
    localStorage.removeItem('userData');
  }

  private getStoredUser(): { user: any, token: string, expirationDate: number } | null {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  }

  getToken(): string | null {
    const storedData = this.getStoredUser();
    return storedData?.token || null;
  }

  isAuthenticated(): boolean {
    const storedData = this.getStoredUser();
    if (!storedData) return false;
    
    return new Date().getTime() < storedData.expirationDate;
  }

  getCurrentUser(): any {
    const storedData = this.getStoredUser();
    return storedData?.user || null;
  }
}