import { Component, OnInit } from '@angular/core';
import { Sensor, SensorService } from '../../../core/services/sensor.service';

@Component({
  selector: 'app-device-list',
  standalone: false,
  templateUrl: './device-list.component.html',
  styleUrl: './device-list.component.scss'
})
export class DeviceListComponent implements OnInit {
  sensors$ = this.sensorService.list();
  formVisible = false;
  edited: Sensor | null = null;

  constructor(private sensorService: SensorService) {}

  ngOnInit(): void {}

  openForm(): void {
    this.edited = null;
    this.formVisible = true;
  }

  edit(s: Sensor): void {
    this.edited = s;
    this.formVisible = true;
  }

  delete(id: string): void {
    this.sensorService.delete(id).subscribe(() => {
      this.sensors$ = this.sensorService.list();
    });
  }

  onSave(s: Sensor): void {
    const op = s.id
      ? this.sensorService.update(s.id, s)
      : this.sensorService.create(s);
    op.subscribe(() => {
      this.formVisible = false;
      this.sensors$ = this.sensorService.list();
    });
  }
}

