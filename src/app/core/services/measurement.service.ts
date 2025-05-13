// src/app/core/services/measurement.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Measurement } from '../models/auth.model';

@Injectable({ providedIn: 'root' })
export class MeasurementService {
  private api = 'http://localhost:8080/api/measurements';

  constructor(private http: HttpClient) {}

  list(room: string, range: string): Observable<Measurement[]> {
    const params = new HttpParams()
      .set('room', room)
      .set('range', range);
    return this.http.get<Measurement[]>(this.api, { params });
  }
}
