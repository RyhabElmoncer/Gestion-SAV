package com.sav.gestion_sav.DTO;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ArticleDTO {
    private Long id;
    private String nom;
    private String marque;
    private LocalDate dateAchat;
    private int dureeGarantie; // Durée en mois
    private String description;
}
