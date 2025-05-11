import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }     from '../core/guards/auth.guard';
import { DashboardOverviewComponent } from './pages/dashboard-overview/dashboard-overview.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardOverviewComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
