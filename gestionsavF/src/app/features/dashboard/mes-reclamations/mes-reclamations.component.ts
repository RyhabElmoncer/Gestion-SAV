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

  constructor(private reclamationService: ReclamationService) {}

  ngOnInit(): void {
    this.chargerReclamations();
  }

  private chargerReclamations(): void {
    this.reclamationService.obtenirToutesReclamations().subscribe({
      next: (data) => (this.reclamations = data),
      error: (err) => console.error('Erreur lors de la récupération des réclamations :', err),
    });
  }
}