package com.sav.gestion_sav.DTO;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PieceRechangeDTO {
    private Long id;
    private String nom;
    private String description;
    private double prix;
}
