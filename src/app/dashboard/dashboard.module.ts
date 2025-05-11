import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardOverviewComponent } from './pages/dashboard-overview/dashboard-overview.component';
import { SharedModule }         from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardOverviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
