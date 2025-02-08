import { Component } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  // Esempio
  user: User = {
    name: 'John',
    surname: 'Doe',
  };

  constructor(protected auth: AuthService) { }

  changePic(event : any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.user.imageProfile = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
