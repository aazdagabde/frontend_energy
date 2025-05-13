import { Component, OnInit } from '@angular/core';
import { RoomService }       from '../../../core/services/room.service';
import { SensorService }     from '../../../core/services/sensor.service';
import { Room, Sensor }      from '../../../core/models/auth.model';

@Component({
  selector: 'app-dashboard-overview',
  standalone: false,
  templateUrl: './dashboard-overview.component.html',

  styleUrls: ['./dashboard-overview.component.scss']
})
export class DashboardOverviewComponent implements OnInit {
  roomsCount    = 0;
  sensorsCount  = 0;

  constructor(
    private roomSvc: RoomService,
    private sensorSvc: SensorService
  ) {}

  ngOnInit(): void {
    this.roomSvc.list().subscribe(rooms => {
      this.roomsCount = rooms.length;
      this.sensorsCount = rooms.reduce((sum, r) => sum + r.sensors.length, 0);
    });
  }
}
