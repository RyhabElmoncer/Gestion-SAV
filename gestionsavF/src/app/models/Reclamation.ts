import { StatutReclamation } from './StatutReclamation';

export class Reclamation {
  id: string; // Id unique de la réclamation (généré par le backend)
  description: string; // Description de la réclamation
  dateSoumission: string; // Date de soumission de la réclamation
  statut: StatutReclamation; // Statut de la réclamation (valeur de l'énumération)
  articleId: string; // ID de l'article associé

  constructor(description: string, date: string, statut: StatutReclamation, articleId: string) {
    this.id = ''; // Le backend attribuera l'ID
    this.description = description;
    this.dateSoumission = date;
    this.statut = statut;
    this.articleId = articleId;
  }
}