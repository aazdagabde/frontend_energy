import { Component, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-device-form',
  standalone: false,
  templateUrl: './device-form.component.html',
  styleUrl: './device-form.component.scss'
})
export class DeviceFormComponent implements OnInit {
  @Input() sensor: Sensor | null = null;
  @Output() save = new EventEmitter<Sensor>();
  @Output() cancel = new EventEmitter<void>();

  form!: FormGroup;
  rooms$ = this.roomService.list(); // optionnel

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name:   [this.sensor?.name || '', Validators.required],
      room:   [this.sensor?.room || '', Validators.required],
      type:   [this.sensor?.type || '', Validators.required],
      unit:   [this.sensor?.unit || '', Validators.required],
    });
  }

  submit(): void {
    if (this.form.invalid) return;
    const data = { ...this.sensor, ...this.form.value } as Sensor;
    this.save.emit(data);
  }
}
