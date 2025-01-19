
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { DashboardTechnicienComponent } from './dashboard-technicien/dashboard-technicien.component';
import { DashboardResponsableComponent } from './dashboard-responsable/dashboard-responsable.component';
import { AuthGuard } from '../../core/Guard/auth.guard';
const routes: Routes = [
  { path: 'dashboard-client', component: DashboardClientComponent },
  { path: 'dashboard-responsable', component: DashboardResponsableComponent },
  { path: 'dashboard-technicien', component: DashboardTechnicienComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],  
  exports: [RouterModule],  
})
export class DashRoutingModule {}
