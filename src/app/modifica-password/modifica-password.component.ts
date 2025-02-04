import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modifica-password',
  templateUrl: './modifica-password.component.html',
  styleUrls: ['./modifica-password.component.css'],
  imports: [ReactiveFormsModule]
})
export class ModificaPasswordComponent {
  passwordForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.passwordForm = this.fb.group(
      {
        newPassword: [
          '',
          [Validators.required, Validators.minLength(8), Validators.maxLength(16)]
        ],
        confirmPassword: ['', [Validators.required]]
      },
      { validators: this.passwordsMatchValidator }
    );
  }

  // Custom validator to check if passwords match
  passwordsMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const newPassword = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return newPassword && confirmPassword && newPassword !== confirmPassword
      ? { passwordsMismatch: true }
      : null;
  }

  onChangePassword() {
    if (this.passwordForm.valid) {
      // Simula l'aggiornamento della password e naviga alla pagina profilo
      this.router.navigate(['/profilo'], { state: { message: 'Password Modificata' } });
    } else {
      this.errorMessage = '';
      if (this.passwordForm.hasError('passwordsMismatch')) {
        this.errorMessage = 'Le password non coincidono.';
      } else if (this.passwordForm.controls['newPassword'].errors) {
        this.errorMessage = 'La password deve essere tra 8 e 16 caratteri.';
      }
    }
  }
}
