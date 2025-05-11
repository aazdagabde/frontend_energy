import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './devices.component';
import { DeviceListComponent } from './pages/device-list/device-list.component';
import { DeviceFormComponent } from './components/device-form/device-form.component';


@NgModule({
  declarations: [
    DevicesComponent,
    DeviceListComponent,
    DeviceFormComponent
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule
  ]
})
export class DevicesModule { }
