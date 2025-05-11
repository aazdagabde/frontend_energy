// src/app/core/services/sensor.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sensor } from '../models/auth.model';

@Injectable({providedIn: 'root'})
export class SensorService {
  private base = 'http://localhost:8080/api/sensors';
  constructor(private http: HttpClient) {}

  list(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(this.base);
  }

  create(room: string, type: string, ref: string): Observable<Sensor> {
    return this.http.post<Sensor>(this.base, { room, type, ref });
  }
}
