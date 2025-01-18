import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isSubmitting: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.isSubmitting = true;
    const credentials = {
      email: this.email,
      password: this.password,
    };
  
    console.log('Données envoyées :', credentials);
  
    this.authService.authenticate(credentials).subscribe(
      (response) => {
        const userId = response.id; // Assurez-vous que 'id' est présent dans la réponse
        const role = response.role; // Assurez-vous que 'role' est correct dans la réponse
  
        // Stocker l'ID utilisateur localement
        localStorage.setItem('userId', userId.toString());
  
        this.redirectToDashboard(role);
        this.isSubmitting = false;
      },
      (error) => {
        console.error('Login échoué :', error);
        this.isSubmitting = false;
      }
    );
  }
  
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
