package com.sav.gestion_sav.DTO;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReclamationDTO {
    private Long id;
    private Long clientId; // Identifiant du client
    private Long articleId; // Identifiant de l'article concerné
    private String description;
    private LocalDate dateSoumission;
    private String statut; // En attente, En cours, etc.
}
