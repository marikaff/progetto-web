import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService                  } from '../auth/auth.service';
import { CommonModule                 } from '@angular/common';
import { Router, RouterModule         } from '@angular/router';
import { MatCardModule                } from '@angular/material/card';
import { MatButtonModule              } from '@angular/material/button';
import { MatIconModule                } from '@angular/material/icon';
import { MatDividerModule             } from '@angular/material/divider';
import { Subscription                 } from 'rxjs';

@Component({
  selector: 'app-admin-page',
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})

export class AdminPageComponent implements OnInit, OnDestroy {
  currentAdmin: any;
  lastLogin: string = '';
  currentTime: string = '';
  private timeInterval: any;
  private userSub!: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    
  }
  /*ngOnInit(): void {
    this.userSub = this.authService.currentUser$.subscribe(user => {
      this.currentAdmin = user;
      if (!this.currentAdmin || this.currentAdmin.role !== 'ADMIN') {
        this.router.navigate(['/']);
      }
    });

    this.updateLastLogin();
    this.updateCurrentTime();
    this.timeInterval = setInterval(() => this.updateCurrentTime(), 1000);
  }*/

  ngOnDestroy(): void {
    if (this.timeInterval) clearInterval(this.timeInterval);
    if (this.userSub) this.userSub.unsubscribe();
  }

  private updateLastLogin(): void {
    this.lastLogin = new Date().toLocaleString('it-IT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  private updateCurrentTime(): void {
    this.currentTime = new Date().toLocaleString('it-IT', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
