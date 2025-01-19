import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = localStorage.getItem('token'); // Vérifiez le token
    const userRole = localStorage.getItem('role'); // Récupérez le rôle utilisateur
    const expectedRole = route.data['role'];

    // Vérification de l'authentification
    if (!token) {
      console.warn('User not authenticated. Redirecting to login.');
      this.router.navigate(['/login']);
      return false;
    }

    // Vérification du rôle
    if (userRole && userRole === expectedRole) {
      return true;
    }

    console.warn('Access denied. User does not have the required role.');
    this.router.navigate(['/forbidden']); // Redirection vers une page 403
    return false;
  }
}
