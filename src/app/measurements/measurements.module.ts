import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ajoutez FormsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// imports ng2-charts
import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables
} from 'ng2-charts';

import { MeasurementsRoutingModule } from './measurements-routing.module';
import { MeasurementsViewComponent } from './pages/measurements-view/measurements-view.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';

@NgModule({
  declarations: [
    MeasurementsViewComponent,
    FilterPanelComponent,
    LineChartComponent,
   
  ],
  imports: [
    CommonModule,           // directives de base + pipes (date)
    FormsModule,            // ← permet [(ngModel)]
    ReactiveFormsModule,    // ← pour ReactiveForms elsewhere
    BaseChartDirective,     // ← directive baseChart
    MeasurementsRoutingModule
  ],
  providers: [
    provideCharts(withDefaultRegisterables())
  ]
})
export class MeasurementsModule {}
