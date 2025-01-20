import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reclamation } from '../../../models/Reclamation';
import { environment } from '../../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ReclamationService {
  private apiUrl: string = `${environment.apiUrl}/reclamations`; 

  constructor(private http: HttpClient) {}

  ajouterReclamation(reclamation: Reclamation): Observable<Reclamation> {
    return this.http.post<Reclamation>(this.apiUrl, reclamation);
  }

  obtenirToutesReclamations(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(this.apiUrl);
  }

  obtenirReclamationParId(id: number): Observable<Reclamation> {
    return this.http.get<Reclamation>(`${this.apiUrl}/${id}`);
  }

  supprimerReclamation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
