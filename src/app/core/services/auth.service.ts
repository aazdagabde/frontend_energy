// src/app/core/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap }        from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoginResponse, RegisterDto } from '../models/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private base = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  login(creds: { username: string; password: string; }): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.base}/login`, creds)
      .pipe(tap(r => this.storeAuthData(r)));
  }

  private storeAuthData(r: LoginResponse): void {
    localStorage.setItem('accessToken', r.token);
    localStorage.setItem('user', JSON.stringify({
      userId:   r.userId,
      username: r.username,
      nom:      r.nom,
      prenom:   r.prenom,
      roles:    r.roles
    }));
  }

  get accessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  get user(): { userId: string; username: string; nom: string; prenom: string; roles: string[] } | null {
    const u = localStorage.getItem('user');
    return u ? JSON.parse(u) : null;
  }

  /** Récupère les rôles stockés */
  get roles(): string[] {
    return this.user?.roles ?? [];
  }

  /** Vérifie la présence d’un rôle */
  hasRole(role: string): boolean {
    return this.roles.includes(role);
  }

  register(data: RegisterDto): Observable<void> {
    return this.http.post<void>(`${this.base}/register`, data);
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${this.base}/logout`, {});
  }
}
