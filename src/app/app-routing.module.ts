import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }            from './core/guards/auth.guard';
import { MainLayoutComponent }  from './layout/components/main-layout/main-layout.component';

const routes: Routes = [
  // Auth hors layout
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(m => m.AuthModule)
  },

  // Toutes les autres routes sous MainLayout
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'rooms',
        loadChildren: () =>
          import('./rooms/rooms.module').then(m => m.RoomsModule)
      },
      {
        path: 'sensors',
        loadChildren: () =>
          import('./sensors/sensors.module').then(m => m.SensorsModule)
      },
      {
        path: 'measurements',
        loadChildren: () =>
          import('./measurements/measurements.module').then(m => m.MeasurementsModule)
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  // Fallback
  { path: '**', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
