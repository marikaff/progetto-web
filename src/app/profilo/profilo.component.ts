import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit {
  showToast = false;
  toastMessage = '';
  profileImage: string = '/assets/user-3296.png'; // Immagine di default

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state?.['message']) {
      this.toastMessage = navigation.extras.state['message'];
      this.showToast = true;
      setTimeout(() => this.showToast = false, 3000);
    }
  }

  onEditPassword() {
    this.router.navigate(['/modifica-password']);
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }  

  onProfileImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onUploadDocument(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Implementa la logica di caricamento del documento
    }
  }
}