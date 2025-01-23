import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // Importation des routes
import { AppComponent } from './app.component'; // Composant principal
import { AuthGuard } from './core/Guard/auth.guard';
import { DashRoutingModule } from './features/dashboard/dash-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  
  declarations: [
    AppComponent, // Déclaration du composant principal
  ],
  imports: [
    BrowserModule,
    DashRoutingModule,
    HttpClientModule, // Pour effectuer des requêtes HTTP
    AppRoutingModule, // Importation des routes
    RouterModule,
  ],
  providers: [AuthGuard], // Fournisseur du guard d'authentification
  bootstrap: [AppComponent], // Démarrage de l'application avec AppComponent
})
export class AppModule {}
