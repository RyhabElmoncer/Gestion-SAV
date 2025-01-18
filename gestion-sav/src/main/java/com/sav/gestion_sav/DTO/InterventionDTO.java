package com.sav.gestion_sav.DTO;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InterventionDTO {
    private Long id;
    private Long reclamationId; // Identifiant de la réclamation concernée
    private Long technicienId; // Identifiant du technicien assigné
    private LocalDate dateIntervention;
    private boolean estSousGarantie; // Indique si l'intervention est gratuite
    private double coutMainOeuvre; // Coût de la main d'œuvre
    private double coutPieces; // Coût des pièces
    private double montantTotal; // Montant total facturé
    private String statut; // Ex : Planifiée, Terminée
}
