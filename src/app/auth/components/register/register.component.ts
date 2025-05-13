import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidationErrors,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../../../core/services/auth.service';
import { RegisterDto } from '../../../core/models/auth.model';

@Component({
  selector: 'app-register',
  standalone : false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup;
  loading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group(
      {
        username: ['', Validators.required],
        email: [
          '',
          [Validators.required, Validators.email]
        ],
        password: [
          '',
          [Validators.required, Validators.minLength(3)]
        ],
        confirm: ['', Validators.required],
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        telephone: [
          '',
          [Validators.required, Validators.pattern(/^\d{10}$/)]
        ]
      },
      { validators: this.passwordsMatchValidator }
    );
  }

  /** Assure que password et confirm sont identiques */
  private passwordsMatchValidator: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    const pw = group.get('password')?.value;
    const cf = group.get('confirm')?.value;
    return pw && cf && pw === cf
      ? null
      : { noMatch: true };
  };

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = null;
    const dto: RegisterDto = this.form.value;

    this.auth
      .register(dto)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: () => this.router.navigate(['/auth/login']),
        error: (e) => {
          this.error =
            e.error?.message ||
            'Une erreur est survenue (Username ou Email déja existe), réessayez.';
        }
      });
  }
}
