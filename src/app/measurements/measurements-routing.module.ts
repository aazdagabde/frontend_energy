import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }            from '../core/guards/auth.guard';
import { MeasurementsViewComponent } from './pages/measurements-view/measurements-view.component';
import{SensorListComponent} from '../sensors/pages/sensor-list/sensor-list.component';
const routes: Routes = [
  {
    path: '',
    
    component: MeasurementsViewComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeasurementsRoutingModule {}
