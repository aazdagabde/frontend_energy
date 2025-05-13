// src/app/sensors/pages/sensor-list/sensor-list.component.ts
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { RoomService }   from '../../../core/services/room.service';
import { SensorService } from '../../../core/services/sensor.service';
import { Room, Sensor }  from '../../../core/models/auth.model';

@Component({
  selector: 'app-sensor-list',
  standalone: false,
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.scss']
})
export class SensorListComponent implements OnInit {
  rooms: Room[] = [];
  sensors: Sensor[] = [];
  activeTab: 'list' | 'add' = 'list';

  form: FormGroup;
  loadingRooms   = true;
  loadingSensors = true;
  creating       = false;
  formError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private roomSvc: RoomService,
    private sensorSvc: SensorService
  ) {
    this.form = this.fb.group({
      room: ['', Validators.required],
      type: ['', Validators.required],
      ref:  ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  ngOnInit(): void {
    this.roomSvc.list().subscribe({
      next: r => {
        this.rooms = r;
        this.loadingRooms = false;
        if (r.length) {
          this.form.patchValue({ room: r[0].name });
        }
      },
      error: () => this.loadingRooms = false
    });

    this.loadSensors();
  }

  selectTab(tab: 'list' | 'add'): void {
    this.activeTab = tab;
    this.formError = null;
    if (tab === 'list') {
      this.loadSensors();
    }
  }

  private loadSensors(): void {
    this.loadingSensors = true;
    this.sensorSvc.list().subscribe({
      next: s => {
        this.sensors = s;
        this.loadingSensors = false;
      },
      error: () => this.loadingSensors = false
    });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.creating = true;
    this.formError = null;

    const { room, type, ref } = this.form.value;
    this.sensorSvc
      .create(room, type, ref)
      .pipe(finalize(() => this.creating = false))
      .subscribe({
        next: s => {
          this.sensors = [s, ...this.sensors];
          this.selectTab('list');
        },
        error: e => {
          this.formError = e.error?.message || 'Erreur lors de la création';
        }
      });
  }
}
