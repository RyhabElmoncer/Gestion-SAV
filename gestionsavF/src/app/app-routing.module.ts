import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './core/forbidden/forbidden.component'; // Page Forbidden

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
