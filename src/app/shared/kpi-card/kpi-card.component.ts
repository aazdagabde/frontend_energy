// src/app/shared/kpi-card/kpi-card.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kpi-card',
  standalone: false,
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.scss']
})
export class KpiCardComponent {
  /** Titre de la KPI (ex. “Température”) */
  @Input() title!: string;
  /** Valeur principale (ex. 23.5) */
  @Input() value!: number | string;
  /** Icône à afficher (string ou template) */
  @Input() icon!: string;
  /** Indique s’il faut afficher le texte de variation */
  @Input() change?: boolean;
  /** Texte de variation (ex. “+5% depuis hier”) */
  @Input() changeText?: string;
}
