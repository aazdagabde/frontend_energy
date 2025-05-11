import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realtime-chart',
  standalone: false,
  templateUrl: './realtime-chart.component.html',
  styleUrls: ['./realtime-chart.component.scss']
})
export class RealtimeChartComponent implements OnInit {
  data: any[] = []; // à remplacer par vos données réelles

  ngOnInit(): void {
    // TODO: implémenter la récupération et l'update en temps réel
  }
}
