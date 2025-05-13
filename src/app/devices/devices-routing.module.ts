import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }            from '../core/guards/auth.guard';
import { RoleGuard }            from '../core/guards/role.guard';
import { DeviceListComponent }  from './pages/device-list/device-list.component';

const routes: Routes = [
  {
    path: '',
    component: DeviceListComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'ADMIN' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule {}
