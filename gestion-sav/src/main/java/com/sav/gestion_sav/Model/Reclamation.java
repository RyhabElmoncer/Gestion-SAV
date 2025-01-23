package com.sav.gestion_sav.Model;

import com.sav.gestion_sav.Enum.StatutReclamation;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Reclamation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;

    private LocalDate dateSoumission;

    @Enumerated(EnumType.STRING)
    private StatutReclamation statut;
    @ManyToOne
    @JoinColumn(name = "article_id", nullable = false)
    private Article article;
}
