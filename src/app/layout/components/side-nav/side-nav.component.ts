import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

interface NavItem {
  label: string;
  icon: string;
  path: string;
}

@Component({
  selector: 'app-side-nav',
  standalone: false,
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  // liste des liens de navigation
  navItems: NavItem[] = [
    { label: 'Dashboard', icon: '📊', path: '/dashboard' },
    { label: 'Pièces', icon: '🚪', path: '/rooms' },
    { label: 'Capteurs', icon: '📡', path: '/sensors' },
    { label: 'Mesures', icon: '📈', path: '/measurements' }
  ];

  // état mobile : ouvert / fermé
  open = false;

  constructor(private auth: AuthService) {}

  get user() {
    return this.auth.user;
  }

  toggle() {
    this.open = !this.open;
  }

  getUserInitials(): string {
    if (!this.user?.prenom || !this.user?.nom) return '?';
    return `${this.user.prenom.charAt(0)}${this.user.nom.charAt(0)}`.toUpperCase();
  }
}