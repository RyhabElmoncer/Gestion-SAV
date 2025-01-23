// dashboard.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

import { AuthGuard } from '../../core/Guard/auth.guard';
import { DashRoutingModule } from './dash-routing.module';

import { DashboardTechnicienComponent } from './dashboard-technicien/dashboard-technicien.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { DashboardResponsableComponent } from './dashboard-responsable/dashboard-responsable.component';
import { AjouterArticleComponent } from './ajouter-article/ajouter-article.component';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { AjouterReclamationComponent } from './ajouter-reclamation/ajouter-reclamation.component';
import { MesReclamationsComponent } from './mes-reclamations/mes-reclamations.component';
import { AjouttechComponent } from './ajouttech/ajouttech.component';

@NgModule({
  declarations: [
    DashboardTechnicienComponent, 
    DashboardClientComponent,
    DashboardResponsableComponent, 
    AjouterArticleComponent, 
    ListeArticlesComponent, 
    ReclamationComponent, 
    AjouterReclamationComponent, 
    MesReclamationsComponent, 
    AjouttechComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule, 
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    DashRoutingModule, 
    RouterModule,
  ],
  providers: [AuthGuard], 
})
export class DashboardModule {}
