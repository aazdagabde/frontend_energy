import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { KpiCardComponent }       from './kpi-card/kpi-card.component';
import { RealtimeChartComponent } from './realtime-chart/realtime-chart.component';

@NgModule({
  declarations: [
    KpiCardComponent,
    RealtimeChartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    KpiCardComponent,
    RealtimeChartComponent
  ]
})
export class SharedModule {}
