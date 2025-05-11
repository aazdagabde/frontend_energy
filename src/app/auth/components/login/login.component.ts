import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { LoginDto } from '../../../core/models/auth.model';

@Component({
  selector: 'app-login',
  standalone: false,  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  loading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    // ⚠️ utilisez bien 'username', pas 'email'
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  submit(): void {
    if (this.form.invalid) return;

    this.loading = true;
    this.error = null;

    const creds = this.form.value as LoginDto;
    console.log('Envoi payload:', creds); // pour debug

    this.auth.login(creds).subscribe({
  next: () => {
    // token stocké, on navigue vers /dashboard
    this.router.navigate(['/dashboard']);
  },
  error: (e) => {
    this.error = e.status === 403
      ? 'Identifiants incorrects'
      : 'Une erreur est survenue';
  }
});

  }
}
