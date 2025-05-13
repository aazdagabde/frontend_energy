// src/app/measurements/components/line-chart/line-chart.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables
} from 'ng2-charts';
export interface DataPoint {
  takenAt: string;
  value: number;
}

@Component({
  selector: 'app-line-chart',
  standalone: false,
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnChanges {
  /** Données brutes reçues via [data] */
  @Input() data: DataPoint[] = [];

  // Ce que ng2-charts attend
  public chartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      { data: [] }
    ]
  };
  public chartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: { beginAtZero: true }
    }
  };
  public chartType: ChartType = 'line';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data) {
      const labels = this.data.map(d => new Date(d.takenAt).toLocaleDateString());
      const values = this.data.map(d => d.value);

      this.chartData = {
        labels,
        datasets: [
          { data: values, label: 'Valeur' }
        ]
      };
    }
  }
}
