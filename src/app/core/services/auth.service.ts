// src/app/core/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap }       from 'rxjs/operators';
import { Observable } from 'rxjs';
import {
  LoginDto, LoginResponse,
  RegisterDto,
  RefreshDto, RefreshResponse
} from '../models/auth.model';

@Injectable({providedIn: 'root'})
export class AuthService {
  private base = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  register(data: RegisterDto): Observable<void> {
    return this.http.post<void>(`${this.base}/register`, data);
  }

  login(creds: LoginDto): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.base}/login`, creds)
      .pipe(tap(r => this.storeTokens(r)));
  }

  refresh(token: string): Observable<RefreshResponse> {
    return this.http.post<RefreshResponse>(`${this.base}/refresh`, { refreshToken: token })
      .pipe(tap(r => this.storeTokens(r)));
  }

  logout(): Observable<void> {
    // optional call to server
    return this.http.post<void>(`${this.base}/logout`, {});
  }

  get accessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  get refreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }

  private storeTokens(r: LoginResponse|RefreshResponse) {
    localStorage.setItem('accessToken',  r.accessToken);
    localStorage.setItem('refreshToken', r.refreshToken);
  }
}
