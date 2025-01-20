import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReclamationService } from '../../../core/services/Reclamation/reclamation.service';
import { Router } from '@angular/router';
import { StatutReclamation } from '../../../models/StatutReclamation';

@Component({
  selector: 'app-ajouter-reclamation',
  templateUrl: './ajouter-reclamation.component.html',
  styleUrls: ['./ajouter-reclamation.component.css']
})
export class AjouterReclamationComponent {
  reclamationForm: FormGroup;
  isSubmitting: boolean = false; // Pour contrôler l'état du formulaire pendant l'envoi

  // Définir les valeurs possibles pour le statut
  StatutReclamation = StatutReclamation;

  constructor(
    private fb: FormBuilder,
    private reclamationService: ReclamationService,
    private router: Router
  ) {
    // Initialisation du formulaire avec validation
    this.reclamationForm = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(10)]],
      dateSoumission: [new Date().toISOString().substring(0, 10), Validators.required],  // Date par défaut
      statut: [StatutReclamation.EN_COURS]  // Utilisation de l'énumération
    });
  }

  // Méthode appelée lors de la soumission du formulaire
  onSubmit(): void {
    console.log('Soumission du formulaire en cours...');

    if (this.reclamationForm.valid) {
      console.log('Formulaire valide, envoi des données:', this.reclamationForm.value);
      this.isSubmitting = true; // Empêche plusieurs soumissions

      this.reclamationService.ajouterReclamation(this.reclamationForm.value)
        .subscribe({
          next: () => {
            alert('Réclamation ajoutée avec succès !');
            this.router.navigate(['/dashboard-client/liste-rec']);
          },
          error: (err) => {
            console.error('Erreur lors de l\'ajout:', err);
            alert('Une erreur est survenue lors de l\'ajout.');
          },
          complete: () => {
            this.isSubmitting = false; // Réinitialiser l'état une fois l'envoi terminé
          }
        });
    } else {
      console.log('Formulaire invalide');
      alert('Veuillez vérifier les champs du formulaire.');
    }
  }
}
