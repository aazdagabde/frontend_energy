import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeasurementsComponent } from './measurements.component';

const routes: Routes = [{ path: '', component: MeasurementsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeasurementsRoutingModule { }
