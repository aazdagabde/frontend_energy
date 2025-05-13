import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }            from '../core/guards/auth.guard';
import { RoleGuard }            from '../core/guards/role.guard';
import { RoomDetailsComponent } from './pages/room-details/room-details.component';
import { RoomListComponent }     from './pages/room-list/room-list.component';

const routes: Routes = [

   {
    path: '',
    component: RoomListComponent,
    canActivate: [AuthGuard]
    
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule {}
