import { Component } from '@angular/core';
import { ReclamationService } from '../../../core/services/Reclamation/reclamation.service';
import { Reclamation } from '../../../models/Reclamation';

@Component({
  selector: 'app-mes-reclamations',
  templateUrl: './mes-reclamations.component.html',
  styleUrl: './mes-reclamations.component.css'
})
export class MesReclamationsComponent { reclamations: Reclamation[] = [];

  constructor(private reclamationService: ReclamationService) {}

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
}
