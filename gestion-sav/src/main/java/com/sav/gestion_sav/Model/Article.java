package com.sav.gestion_sav.Model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private String marque;
    private String description;
    private String dateAchat; // Ensure this is included
    private int dureeGarantie;
    private String cin;
}

