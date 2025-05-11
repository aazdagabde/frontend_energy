// src/app/core/services/room.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../models/auth.model';

@Injectable({providedIn: 'root'})
export class RoomService {
  private base = 'http://localhost:8080/api/rooms';
  constructor(private http: HttpClient) {}

  list(): Observable<Room[]> {
    return this.http.get<Room[]>(this.base);
  }

  create(name: string): Observable<Room> {
    return this.http.post<Room>(this.base, { name });
  }
}
