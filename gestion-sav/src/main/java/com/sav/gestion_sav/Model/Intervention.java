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
public class Intervention {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "reclamation_id", nullable = false)
    private Reclamation reclamation;

    @ManyToOne
    @JoinColumn(name = "technicien_id", nullable = false)
    private Technicien technicien;

    private LocalDate dateIntervention;
    private boolean estSousGarantie;

    private double coutMainOeuvre;
    private double coutPieces;
    private double montantTotal;

    private String statut; // Ex : Planifiée, Terminé, etc.
}
