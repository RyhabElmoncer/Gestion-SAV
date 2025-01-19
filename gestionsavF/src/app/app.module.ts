import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // Importation des routes
import { AppComponent } from './app.component'; // Composant principal
import { AuthGuard } from './core/Guard/auth.guard';
import { DashRoutingModule } from './features/dashboard/dash-routing.module';

@NgModule({
  
  declarations: [
    AppComponent, // Déclaration du composant principal
  ],
  imports: [
    DashRoutingModule,
    BrowserModule, // Nécessaire pour toute application Angular
    HttpClientModule, // Pour effectuer des requêtes HTTP
    AppRoutingModule, // Importation des routes
    
  ],
  providers: [AuthGuard], // Fournisseur du guard d'authentification
  bootstrap: [AppComponent], // Démarrage de l'application avec AppComponent
})
export class AppModule {}
