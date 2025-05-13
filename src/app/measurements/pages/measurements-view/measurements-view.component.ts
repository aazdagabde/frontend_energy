import { Component, OnInit } from '@angular/core';
import { RoomService }       from '../../../core/services/room.service';
import { MeasurementService } from '../../../core/services/measurement.service';
import { Room, Measurement } from '../../../core/models/auth.model';

interface DataPoint {
  takenAt: string;
  value: number;
  unit: string;
  sensor: string;
}

@Component({
  selector: 'app-measurements-view',
  standalone: false,
  templateUrl: './measurements-view.component.html',
  styleUrls: ['./measurements-view.component.scss']
})
export class MeasurementsViewComponent implements OnInit {
  rooms: Room[] = [];
  selectedRoom = '';
  selectedRange = '7days';
  measurementsData: DataPoint[] = [];
  loadingRooms = true;
  loadingMeasures = false;
  errorLoading = '';

  constructor(
    private roomSvc: RoomService,
    private msrSvc: MeasurementService
  ) {}

  ngOnInit(): void {
    this.roomSvc.list().subscribe({
      next: rooms => {
        this.rooms = rooms;
        this.loadingRooms = false;
        if (rooms.length) {
          this.selectedRoom = rooms[0].name;
          this.loadMeasures();
        }
      },
      error: () => {
        this.loadingRooms = false;
        this.errorLoading = 'Impossible de charger les pièces';
      }
    });
  }

  loadMeasures(): void {
    this.loadingMeasures = true;
    this.errorLoading = '';
    this.msrSvc.list(this.selectedRoom, this.selectedRange).subscribe({
      next: data => {
        this.measurementsData = data
          .filter(m => !!m.takenAt)
          .map(m => ({
            takenAt: m.takenAt!,
            value:   m.value,
            unit:    m.unit,
            sensor:  m.sensorRef
          }));
        this.loadingMeasures = false;
      },
      error: () => {
        this.loadingMeasures = false;
        this.errorLoading = 'Échec du chargement des mesures';
        this.measurementsData = [];
      }
    });
  }

  onRoomChange(room: string): void {
    this.selectedRoom = room;
    this.loadMeasures();
  }

  onRangeChange(range: string): void {
    this.selectedRange = range;
    this.loadMeasures();
  }
}
