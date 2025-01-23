package com.sav.gestion_sav.DTO;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class ArticleDTO {
    private Long id;
    private String nom;
    private String marque;
    private String description;
    private String dateAchat; // Ensure this is included
    private int dureeGarantie;
    private String cin; // Ensure this is included

    // Getters and Setters
}
