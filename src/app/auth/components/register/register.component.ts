import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { RegisterDto } from '../../../core/models/auth.model';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup;
  loading = false;           // <-- ajouté
  error: string | null = null; // <-- ajouté

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group(
      {
        username:  ['', Validators.required],
        password:  ['', [Validators.required, Validators.minLength(3)]],
        confirm:   ['', Validators.required],
        email:     ['', [Validators.required, Validators.email]],
        nom:       ['', Validators.required],
        prenom:    ['', Validators.required],
        telephone: ['', Validators.required]
      },
      { validators: this.matchPasswords('password', 'confirm') }
    );
  }

  // Validateur compatible Angular Forms
  private matchPasswords(a: string, b: string): ValidatorFn {
    return (control: AbstractControl) => {
      const fg = control as FormGroup;
      return fg.get(a)!.value === fg.get(b)!.value
        ? null
        : { noMatch: true };
    };
  }

  submit(): void {
    if (this.form.invalid) return;
    this.loading = true;
    this.error = null;

    const data = this.form.value as RegisterDto;
    this.auth.register(data).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/auth/login']);
      },
      error: (e) => {
        this.error = e.error?.message || 'Échec de l’inscription';
        this.loading = false;
      }
    });
  }
}
