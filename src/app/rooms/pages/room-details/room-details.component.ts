import { Component, OnInit } from '@angular/core';
import { RoomService }       from '../../../core/services/room.service';
import { Room }              from '../../../core/models/auth.model';

@Component({
 selector: 'app-room-details',
  standalone: false,
  templateUrl: './room-details.component.html',
  styleUrl: './room-details.component.scss'
})
export class RoomDetailsComponent implements OnInit {
  rooms: Room[] = [];
  loading = true;

  constructor(private roomSvc: RoomService) {}

  ngOnInit() {
    this.roomSvc.list().subscribe(r => {
      this.rooms = r;
      this.loading = false;
    });
  }
}
