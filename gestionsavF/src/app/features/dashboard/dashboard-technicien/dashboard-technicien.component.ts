import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../../../models/Reclamation';
import { ReclamationService } from '../../../core/services/Reclamation/reclamation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-technicien',
  templateUrl: './dashboard-technicien.component.html',
  styleUrls: ['./dashboard-technicien.component.css']
})
export class DashboardTechnicienComponent implements OnInit {
  reclamations: Reclamation[] = [];

  constructor(private reclamationService: ReclamationService, private router: Router) {}

  ngOnInit(): void {
    this.reclamationService.obtenirToutesReclamations().subscribe(
      (data) => {
        this.reclamations = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des réclamations', error);
      }
    );
  }

  // Define the onStatutChange method
  onStatutChange(event: Event, id: string | undefined): void {
    const selectElement = event.target as HTMLSelectElement;
    const nouveauStatut = selectElement.value;
    this.changerStatut(id, nouveauStatut);
  }

  changerStatut(id: string | undefined, nouveauStatut: string): void {
    if (!id) {
      console.error('ID de la réclamation est invalide');
      return;
    }

    this.reclamationService.changerStatutReclamation(id, nouveauStatut).subscribe(
      (reclamationMiseAJour) => {
        const index = this.reclamations.findIndex(r => r.id === id);
        if (index !== -1) {
          this.reclamations[index] = reclamationMiseAJour;
        }
      },
      (error) => {
        console.error('Erreur lors du changement de statut', error);
      }
    );
  }

  deconnecter(): void {
    // Supprimer les données de l'utilisateur du localStorage
    localStorage.removeItem('cin');
    localStorage.removeItem('token'); // Si vous utilisez un token d'authentification

    // Rediriger vers la page de connexion
    this.router.navigate(['/login']);
  }
}