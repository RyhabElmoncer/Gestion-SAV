
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardResponsableComponent } from './dashboard-responsable/dashboard-responsable.component';
import { AuthGuard } from '../../core/Guard/auth.guard';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { AjouterReclamationComponent } from './ajouter-reclamation/ajouter-reclamation.component';
import { MesReclamationsComponent } from './mes-reclamations/mes-reclamations.component';
import { AjouttechComponent } from './ajouttech/ajouttech.component';
import { DashboardTechnicienComponent } from './dashboard-technicien/dashboard-technicien.component';
import { AjouterArticleComponent } from './ajouter-article/ajouter-article.component';
const routes: Routes = [
  {
    path: 'dashboard-client', 
    component: DashboardClientComponent,
    children: [
      { path: 'ajouter-rec', component: AjouterReclamationComponent },
      { path: 'liste-rec', component: MesReclamationsComponent },
     
    ]
  },
  {
    path: 'dashboard-responsable',
    component: DashboardResponsableComponent,
    children: [
      { path: 'ajouter-article', component: AjouterArticleComponent },
      { path: 'liste-articles', component: ListeArticlesComponent },
      { path: 'liste-reclamations', component: ReclamationComponent },
      { path: 'ajout-tech', component: AjouttechComponent },
    ]
  },
  { path: 'dashboard-technicien', component: DashboardTechnicienComponent },
];




@NgModule({
  imports: [RouterModule.forChild(routes)],  
  exports: [RouterModule],  
})
export class DashRoutingModule {}
