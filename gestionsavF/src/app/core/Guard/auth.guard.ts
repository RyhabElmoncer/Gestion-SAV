import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role'); // Récupère le rôle depuis localStorage

    if (!token) {
      console.warn('Utilisateur non authentifié. Redirection vers la page de connexion.');
      this.router.navigate(['/auth/login']);
      return false;
    }

    if (!userRole) {
      console.warn('Rôle utilisateur introuvable. Redirection vers la page Forbidden.');
      this.router.navigate(['/forbidden']);
      return false;
    }

    // Récupération du chemin de la route actuelle
    const routePath = route.routeConfig?.path;
    console.log('Route demandée :', routePath);
    console.log('Rôle utilisateur :', userRole);

    // Correspondance entre le rôle et la route
    if (this.isRouteAllowedForRole(userRole, routePath)) {
      console.log('Accès autorisé.');
      return true;
    }

    console.warn('Accès refusé. Rôle utilisateur incompatible.');
    this.router.navigate(['/forbidden']);
    return false;
  }

  /**
   * Vérifie si une route est autorisée pour un rôle spécifique.
   * @param role Rôle de l'utilisateur
   * @param routePath Chemin de la route
   */
  private isRouteAllowedForRole(role: string, routePath: string | undefined): boolean {
    const roleToRouteMap: { [key: string]: string } = {
      CLIENT: 'dashboard-client',
      RESPONSABLE_SAV: 'dashboard-responsable',
      TECHNICIEN: 'dashboard-technicien',
    };

    // Comparer le chemin de la route avec celui attendu pour le rôle
    return routePath === roleToRouteMap[role];
  }
}
