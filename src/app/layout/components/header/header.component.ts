import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  get user() {
    return this.auth.user;
  }

  logout(): void {
    this.auth.logout().subscribe(() => {
      localStorage.clear();
      this.router.navigate(['/auth/login']);
    });
  }

  toggleTheme(): void {
    document.documentElement.classList.toggle('dark');
  }
}