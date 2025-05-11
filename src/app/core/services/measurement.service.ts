// src/app/core/services/measurement.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Measurement } from '../models/auth.model';

@Injectable({providedIn: 'root'})
export class MeasurementService {
  private base = 'http://localhost:8080/api/measurements';
  constructor(private http: HttpClient) {}

  list(): Observable<Measurement[]> {
    return this.http.get<Measurement[]>(this.base);
  }
}
