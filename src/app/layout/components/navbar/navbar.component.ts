import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() toggleNav = new EventEmitter<void>();

  constructor(
    private auth: AuthService,
    private router: Router,
    private themeService: ThemeService  
  ) {}

  get user() {
    return this.auth.user;
  }

  toggleSideNav(): void {
    this.toggleNav.emit();
  }

  toggleTheme(): void {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  }

  logout(): void {
    this.auth.logout().subscribe(() => {
      localStorage.clear();
      this.router.navigate(['/auth/login']);
    });
  }
}