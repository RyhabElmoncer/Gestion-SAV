// auth.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashRoutingModule } from './dash-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../../core/Guard/auth.guard';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { DashboardResponsableComponent } from './dashboard-responsable/dashboard-responsable.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { DashboardTechnicienComponent } from './dashboard-technicien/dashboard-technicien.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AjouterArticleComponent } from './ajouter-article/ajouter-article.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { AjouterReclamationComponent } from './ajouter-reclamation/ajouter-reclamation.component';
import { MesReclamationsComponent } from './mes-reclamations/mes-reclamations.component';
import { AjouttechComponent } from './ajouttech/ajouttech.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    DashboardTechnicienComponent, 
    DashboardClientComponent,
    DashboardResponsableComponent, 
    AjouterArticleComponent, 
    ListeArticlesComponent, ReclamationComponent, AjouterReclamationComponent, AjouterReclamationComponent, MesReclamationsComponent, AjouttechComponent, 
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule, // Ce module est essentiel pour les animations
        MatFormFieldModule,
    MatInputModule,
        MatToolbarModule, 
        RouterModule,
        MatIconModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatMenuModule,
    CommonModule,    
        DashRoutingModule, 
  ],
  providers: [AuthGuard], 

})
export class DashboardModule { }
