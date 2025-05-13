// src/app/rooms/components/room-form/room-form.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomService } from '../../../core/services/room.service';
import { Room }        from '../../../core/models/auth.model';

@Component({
  selector: 'app-room-form',
  standalone: false,
  templateUrl: './room-form.component.html'
})
export class RoomFormComponent {
  @Output() created = new EventEmitter<Room>();
  form: FormGroup;  // <-- déclaration sans initialisation

  constructor(
    private fb: FormBuilder,
    private svc: RoomService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });  // initialisation ici
  }

  submit(): void {
    if (this.form.invalid) return;
    // Type assertion pour lever l’union
    const name = this.form.value.name as string;
    this.svc.create(name).subscribe(r => this.created.emit(r));
  }
}
