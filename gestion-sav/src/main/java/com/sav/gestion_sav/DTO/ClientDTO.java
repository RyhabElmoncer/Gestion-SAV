package com.sav.gestion_sav.DTO;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ClientDTO extends UserDTO {
    private String adresse;
}
