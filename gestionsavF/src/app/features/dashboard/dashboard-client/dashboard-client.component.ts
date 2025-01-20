import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrl: './dashboard-client.component.css'
})
export class DashboardClientComponent {
 constructor(private router: Router) {}
  logout(): void {
    // Supprimer les informations d'authentification (ex: token)
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Rediriger vers la page de connexion
    this.router.navigate(['/login']);
  }  
}
