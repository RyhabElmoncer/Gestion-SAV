
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardResponsableComponent } from './dashboard-responsable/dashboard-responsable.component';
import { AuthGuard } from '../../core/Guard/auth.guard';
import { AjouterArticleComponent } from './ajouter-article/ajouter-article.component';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { DashboardTechnicienComponent } from '../Auth/dashboard-technicien/dashboard-technicien.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
const routes: Routes = [
  { path: 'dashboard-client', component: DashboardClientComponent },
  { path: 'dashboard-responsable', component: DashboardResponsableComponent,children: [
    { path: 'ajouter-article', component: AjouterArticleComponent },
    { path: 'liste-articles', component: ListeArticlesComponent },
    { path: 'liste-reclamations', component: ReclamationComponent },
  ]},
  { path: 'dashboard-technicien', component: DashboardTechnicienComponent},

 
];



@NgModule({
  imports: [RouterModule.forChild(routes)],  
  exports: [RouterModule],  
})
export class DashRoutingModule {}
