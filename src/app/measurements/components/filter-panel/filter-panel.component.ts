// src/app/measurements/components/filter-panel/filter-panel.component.ts
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RoomService } from '../../../core/services/room.service';

@Component({
  selector: 'app-filter-panel',
  standalone: false,

  templateUrl: './filter-panel.component.html'
})
export class FilterPanelComponent implements OnInit {
  @Output() criteria = new EventEmitter<{ room: string; range: string }>();
  form: FormGroup;

  rooms: string[] = [];

  constructor(private fb: FormBuilder, private roomSvc: RoomService) {
    this.form = this.fb.group({
      room: [''],
      range: ['7days']
    });
  }

  ngOnInit() {
    this.roomSvc.list().subscribe(r => this.rooms = r.map(x => x.name));
    // émettre au changement de valeur
    this.form.valueChanges.subscribe(val => this.criteria.emit(val));
  }
}
