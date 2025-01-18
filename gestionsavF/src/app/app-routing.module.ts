import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardClientComponent } from './components/dashboard-client/dashboard-client.component';
import { DashboardResponsableComponent } from './components/dashboard-responsable/dashboard-responsable.component';
import { DashboardTechnicienComponent } from './components/dashboard-technicien/dashboard-technicien.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './AuthGuard/auth.guard';

const routes: Routes = [
  { path: 'dashboard-client', component: DashboardClientComponent, canActivate: [AuthGuard], data: { role: 'CLIENT' } },
  { path: 'dashboard-responsable', component: DashboardResponsableComponent, canActivate: [AuthGuard], data: { role: 'RESPONSABLE_SAV' } },
  { path: 'dashboard-technicien', component: DashboardTechnicienComponent, canActivate: [AuthGuard], data: { role: 'TECHNICIEN' } },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: 'login' } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
