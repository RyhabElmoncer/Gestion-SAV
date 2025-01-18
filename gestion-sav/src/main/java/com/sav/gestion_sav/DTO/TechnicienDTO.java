package com.sav.gestion_sav.DTO;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TechnicienDTO extends UserDTO {
    private String specialite;
}
