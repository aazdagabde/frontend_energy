import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }            from '../core/guards/auth.guard';
import { RoleGuard }            from '../core/guards/role.guard';
import { SensorListComponent }  from './pages/sensor-list/sensor-list.component';

const routes: Routes = [
  {
    path: '',
    component: SensorListComponent,
    canActivate: [AuthGuard],
    data: { role: 'ADMIN' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SensorsRoutingModule {}
