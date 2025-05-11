import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeasurementsRoutingModule } from './measurements-routing.module';
import { MeasurementsComponent } from './measurements.component';
import { MeasurementsViewComponent } from './pages/measurements-view/measurements-view.component';
import { DateRangePickerComponent } from './components/date-range-picker/date-range-picker.component';
import { TrendLineChartComponent } from './components/trend-line-chart/trend-line-chart.component';


@NgModule({
  declarations: [
    MeasurementsComponent,
    MeasurementsViewComponent,
    DateRangePickerComponent,
    TrendLineChartComponent
  ],
  imports: [
    CommonModule,
    MeasurementsRoutingModule
  ]
})
export class MeasurementsModule { }
