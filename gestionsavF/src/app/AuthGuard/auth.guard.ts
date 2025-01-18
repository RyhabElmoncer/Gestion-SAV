import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userRole = localStorage.getItem('role'); // Exemple : récupération du rôle
    const requiredRole = route.data['role'];

    if (userRole === requiredRole) {
      return true;
    }

    this.router.navigate(['/login']); // Redirection en cas d'accès non autorisé
    return false;
  }
}
