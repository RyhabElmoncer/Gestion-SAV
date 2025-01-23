import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../../../core/services/Reclamation/reclamation.service';
import { Reclamation } from '../../../models/Reclamation';

@Component({
  selector: 'app-mes-reclamations',
  templateUrl: './mes-reclamations.component.html',
  styleUrls: ['./mes-reclamations.component.css'],
})
export class MesReclamationsComponent implements OnInit {
  reclamations: Reclamation[] = [];
  cinUtilisateur: string | null = null;

  constructor(private reclamationService: ReclamationService) {}

  ngOnInit(): void {
    this.recupererCinDepuisLocalStorage();
    if (this.cinUtilisateur) {
      this.chargerReclamationsParCin(this.cinUtilisateur);
    } else {
      console.error("CIN utilisateur non trouvé dans le local storage.");
    }
  }

  private recupererCinDepuisLocalStorage(): void {
    this.cinUtilisateur = localStorage.getItem('cin');
  }

  private chargerReclamationsParCin(cin: string): void {
    this.reclamationService.obtenirReclamationsParCin(cin).subscribe({
      next: (data) => (this.reclamations = data),
      error: (err) => console.error('Erreur lors de la récupération des réclamations :', err),
    });
  }
}
