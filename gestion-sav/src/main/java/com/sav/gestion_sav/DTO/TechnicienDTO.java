package com.sav.gestion_sav.DTO;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TechnicienDTO extends UserDTO {
    private String specialite;
    public static TechnicienDTO.TechnicienDTOBuilder technicienDTO() {
        return new TechnicienDTO.TechnicienDTOBuilder();
    }

    // Vos autres méthodes et le builder pour ClientDTO
    public static class TechnicienDTOBuilder {
        // Implémentation spécifique à ClientDTO
    }
}
