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
    private Long clientId;
    private Long articleId;
    private String description;
    private LocalDate dateSoumission;
    private String statut;
    private String cin;
}