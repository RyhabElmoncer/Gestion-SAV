import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isSubmitting: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}
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

    this.authService.authenticate(credentials).subscribe(
      (response) => {
        console.log('Réponse reçue :', response);

        const userId = response.id; 
        const role = response.role; 

        if (!response.access_token || !role) {
          this.errorMessage = 'Réponse du serveur invalide.';
          this.isSubmitting = false;
          return;
        }

        localStorage.setItem('userId', userId.toString());
        localStorage.setItem('token', response.access_token); 
        localStorage.setItem('role', role); 

        console.log('Stockage local après redirection :', localStorage);

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

  redirectToDashboard(role: string) {
    const roleToRouteMap: { [key: string]: string } = {
      CLIENT: 'dashboard/dashboard-client',
      RESPONSABLE_SAV: 'dashboard/dashboard-responsable',
      TECHNICIEN: 'dashboard/dashboard-technicien',
    };
  
    const route = roleToRouteMap[role];
    if (route) {
      console.log(`Redirection vers ${route}`);
      this.router.navigate([route]);
    } else {
      console.warn('Rôle utilisateur non reconnu.');
      this.router.navigate(['/forbidden']);
    }
  }
  
  
}
