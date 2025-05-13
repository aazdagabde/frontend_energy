import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule }  from '@angular/forms'; 
import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomListComponent } from './pages/room-list/room-list.component';
import { RoomFormComponent } from './components/room-form/room-form.component';
import { RoomDetailsComponent } from './pages/room-details/room-details.component';


@NgModule({
  declarations: [
    RoomsComponent,
    RoomListComponent,
    RoomFormComponent,
    RoomDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    ReactiveFormsModule,  
  ]
})
export class RoomsModule { }
