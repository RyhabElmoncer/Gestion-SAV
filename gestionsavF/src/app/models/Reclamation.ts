import { StatutReclamation } from "./StatutReclamation";

export class Reclamation {
  id: string;  // Id unique de la réclamation
  description: string;  // Description de la réclamation
  dateSoumission: string;  // Date de soumission de la réclamation
  statut: StatutReclamation;  // Statut de la réclamation (valeur de l'énumération)

  constructor(description: string, date: string, status: StatutReclamation) {
    this.id = '';  // Le backend attribuera l'ID
    this.description = description;
    this.dateSoumission = date;
    this.statut = status;
  }
}
