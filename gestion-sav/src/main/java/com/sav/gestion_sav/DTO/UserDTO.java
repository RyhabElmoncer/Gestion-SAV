package com.sav.gestion_sav.DTO;

import com.sav.gestion_sav.Enum.Role;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDTO {
    private Long id;
    private String username;
    private String email;
    private String lastName;
    private Role role;
    private String cin;
}
