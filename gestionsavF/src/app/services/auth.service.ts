import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:9999/api/v1/auth'; // URL de votre backend

  constructor(private http: HttpClient) {}

  /**
   * Inscription
   * @param data Les données de l'utilisateur
   * @returns Observable de la réponse
   */
  register(data: any): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/register`, data, { headers: this.getDefaultHeaders() })
      .pipe(catchError((error) => this.handleError(error)));
  }

  /**
   * Authentification
   * @param data Les données d'authentification (email, mot de passe, etc.)
   * @returns Observable de la réponse
   */
  authenticate(data: any): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/authenticate`, data, { headers: this.getDefaultHeaders() })
      .pipe(catchError((error) => this.handleError(error)));
  }

  /**
   * Rafraîchissement du token
   * @param refreshToken Le token de rafraîchissement
   * @returns Observable de la réponse
   */
  refreshToken(refreshToken: string): Observable<any> {
    const headers = this.getHeadersWithToken(refreshToken);
    return this.http
      .post(`${this.apiUrl}/refresh-token`, {}, { headers })
      .pipe(catchError((error) => this.handleError(error)));
  }

  /**
   * Obtenir les en-têtes par défaut
   * @returns HttpHeaders avec `Content-Type: application/json`
   */
  private getDefaultHeaders(): HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/json');
  }

  /**
   * Obtenir les en-têtes avec token
   * @param token Le token JWT ou de rafraîchissement
   * @returns HttpHeaders avec `Authorization` et `Content-Type`
   */
  private getHeadersWithToken(token: string): HttpHeaders {
    return new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`);
  }

  /**
   * Gestion des erreurs HTTP
   * @param error Erreur HTTP
   * @returns Observable d'erreur
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Une erreur est survenue';
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      errorMessage = `Erreur client : ${error.error.message}`;
    } else {
      // Erreur côté serveur
      errorMessage = `Erreur serveur : ${error.status} - ${error.error.message || error.message}`;
    }
    console.error('[Erreur AuthService]', errorMessage, error); // Debug dans la console
    return throwError(() => new Error(errorMessage));
  }
}
