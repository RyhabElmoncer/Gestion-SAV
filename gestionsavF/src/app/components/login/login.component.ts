import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Correction ici
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isSubmitting: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Gère la soumission du formulaire de connexion.
   */
  onSubmit() {
    this.isSubmitting = true; // Désactiver le bouton de soumission
    this.errorMessage = ''; // Réinitialiser les messages d'erreur

    if (!this.email || !this.password) {
      this.errorMessage = 'Veuillez remplir tous les champs.';
      this.isSubmitting = false;
      return;
    }

    const credentials = {
      email: this.email,
      password: this.password,
    };

    console.log('Données envoyées :', credentials);

    // Appeler le service d'authentification
    this.authService.authenticate(credentials).subscribe(
      (response) => {
        console.log('Réponse reçue :', response);

        const userId = response.id; // Assurez-vous que 'id' est présent dans la réponse
        const role = response.role; // Assurez-vous que 'role' est correct dans la réponse

        if (!response.access_token || !role) {
          this.errorMessage = 'Réponse du serveur invalide.';
          this.isSubmitting = false;
          return;
        }

        // Stocker les données dans localStorage
        localStorage.setItem('userId', userId.toString());
        localStorage.setItem('token', response.access_token); // Stocker le token JWT
        localStorage.setItem('role', role); // Stocker le rôle utilisateur

        // Rediriger vers le tableau de bord approprié
        this.redirectToDashboard(role);
        this.isSubmitting = false;
      },
      (error) => {
        console.error('Erreur lors de la connexion :', error);
        this.errorMessage =
          error?.error?.message || 'Une erreur est survenue. Veuillez réessayer.';
        this.isSubmitting = false;
      }
    );
  }

  /**
   * Redirige l'utilisateur vers le tableau de bord en fonction de son rôle.
   * @param role Rôle de l'utilisateur
   */
  redirectToDashboard(role: string) {
    switch (role) {
      case 'CLIENT':
        this.router.navigate(['/dashboard-client']);
        break;
      case 'RESPONSABLE_SAV':
        this.router.navigate(['/dashboard-responsable']);
        break;
      case 'TECHNICIEN':
        this.router.navigate(['/dashboard-technicien']);
        break;
      default:
        this.errorMessage = 'Rôle utilisateur non reconnu.';
    }
  }
}
