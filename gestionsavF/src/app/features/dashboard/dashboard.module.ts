// auth.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTechnicienComponent } from './dashboard-technicien/dashboard-technicien.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { DashRoutingModule } from './dash-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../../core/Guard/auth.guard';

@NgModule({
  declarations: [
    DashboardTechnicienComponent,  // Déclaration du composant Login
    DashboardClientComponent, // Déclaration du composant Signup
  ],
  imports: [
    ReactiveFormsModule,
        FormsModule,
    
    CommonModule,    // Importation de CommonModule pour utiliser les fonctionnalités de base d'Angular
    DashRoutingModule, // Importation du module de routage pour Auth
  ],
  providers: [AuthGuard], // Assurez-vous que AuthGuard est dans les providers

})
export class DashboardModule { }
