// src/app/sensors/sensors.module.ts
import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SensorsRoutingModule }   from './sensors-routing.module';
import { SensorListComponent }    from './pages/sensor-list/sensor-list.component';

@NgModule({
  declarations: [SensorListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SensorsRoutingModule
  ]
})
export class SensorsModule {}
