import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './core/forbidden/forbidden.component'; // Page Forbidden
import { AuthGuard } from './core/Guard/auth.guard'; // AuthGuard pour protéger les routes
import { DashboardClientComponent } from './features/dashboard/dashboard-client/dashboard-client.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/Auth/auth.module').then((m) => m.AuthModule), // Lazy loading du module Auth
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule), // Lazy loading du module Dashboard
     // Protéger la route avec AuthGuard
  },
  { path: 'forbidden', component: ForbiddenComponent }, // Page interdite
  { path: '**', redirectTo: 'auth/login', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
