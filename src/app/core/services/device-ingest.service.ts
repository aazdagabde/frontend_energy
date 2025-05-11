// src/app/core/services/device-ingest.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IngestDto } from '../models/auth.model';

@Injectable({providedIn: 'root'})
export class DeviceIngestService {
  private url = 'http://localhost:8080/api/device/measurements';
  constructor(private http: HttpClient) {}

  ingest(dto: IngestDto): Observable<void> {
    return this.http.post<void>(this.url, dto);
  }
}
