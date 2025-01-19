import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../../../core/services/Reclamation/reclamation.service';

interface ReclamationDTO {
  id?: number;
  description: string;
  date: string;
  status: string;
}

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  reclamations: ReclamationDTO[] = [];

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
