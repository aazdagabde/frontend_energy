import { OnInit } from "@angular/core";
import { Measurement, MeasurementService } from "../../../core/services/measurement.service";

export class MeasurementsViewComponent implements OnInit {
  measurements: Measurement[] = [];

  constructor(private svc: MeasurementService) {}

  ngOnInit(): void {
    this.loadHistory('LivingRoom', '7days');
  }

  loadHistory(room: string, range: string): void {
    this.svc.history(room, range).subscribe(data => {
      this.measurements = data;
    });
  }

  onRange({ room, start, end, range }): void {
    if (start && end) {
      this.svc.range(room, start, end).subscribe(d => (this.measurements = d));
    } else {
      this.loadHistory(room, range);
    }
  }

  loadLast(): void {
    if (!this.measurements.length) return;
    const latest = this.measurements[0].sensorId;
    this.svc.last(latest).subscribe(m => this.measurements.unshift(m));
  }
}
