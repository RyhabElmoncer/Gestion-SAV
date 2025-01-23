import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Reclamation } from '../../../models/Reclamation';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReclamationService {
  private apiUrl: string = `${environment.apiUrl}/reclamations`;

  constructor(private http: HttpClient) {}

  /**
   * Ajoute une nouvelle réclamation.
   * @param reclamation - La réclamation à ajouter.
   * @returns Un Observable de la réclamation ajoutée.
   */
  ajouterReclamation(reclamation: Reclamation): Observable<Reclamation> {
    return this.http.post<Reclamation>(this.apiUrl, reclamation).pipe(
      catchError(this.handleError) // Gestion des erreurs
    );
  }

  /**
   * Récupère toutes les réclamations.
   * @returns Un Observable de la liste des réclamations.
   */
  obtenirToutesReclamations(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(this.apiUrl).pipe(
      catchError(this.handleError) // Gestion des erreurs
    );
  }

  /**
   * Récupère une réclamation par son ID.
   * @param id - L'ID de la réclamation à récupérer.
   * @returns Un Observable de la réclamation.
   */
  obtenirReclamationParId(id: number): Observable<Reclamation> {
    return this.http.get<Reclamation>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError) // Gestion des erreurs
    );
  }

  /**
   * Supprime une réclamation par son ID.
   * @param id - L'ID de la réclamation à supprimer.
   * @returns Un Observable vide.
   */
  supprimerReclamation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError) // Gestion des erreurs
    );
  }

  /**
   * Gère les erreurs HTTP.
   * @param error - L'erreur HTTP.
   * @returns Un Observable avec un message d'erreur.
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Une erreur inconnue est survenue.';
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      errorMessage = `Erreur : ${error.error.message}`;
    } else {
      // Erreur côté serveur
      errorMessage = `Code d'erreur : ${error.status}\nMessage : ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}