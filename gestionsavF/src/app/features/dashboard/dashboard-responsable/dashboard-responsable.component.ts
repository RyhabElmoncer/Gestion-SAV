import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-responsable',
  templateUrl: './dashboard-responsable.component.html',
  styleUrl: './dashboard-responsable.component.css'
})
export class DashboardResponsableComponent {
  constructor(private router: Router) {}
  logout(): void {
    // Supprimer les informations d'authentification (ex: token)
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Rediriger vers la page de connexion
    this.router.navigate(['/login']);
  }
}
