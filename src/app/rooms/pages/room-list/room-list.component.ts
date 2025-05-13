import { Component, OnInit } from '@angular/core';
import { RoomService }       from '../../../core/services/room.service';
import { Room }              from '../../../core/models/auth.model';

@Component({
  selector: 'app-room-list',
  standalone: false,
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
  rooms: Room[] = [];
  activeTab: 'list' | 'add' = 'list';

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.loadRooms();
  }

  selectTab(tab: 'list' | 'add'): void {
    this.activeTab = tab;
    if (tab === 'list') {
      this.loadRooms();
    }
  }

  private loadRooms(): void {
    this.roomService.list().subscribe(r => (this.rooms = r));
  }

  onCreated(newRoom: Room): void {
    this.rooms = [newRoom, ...this.rooms];
    this.activeTab = 'list';
  }
}
