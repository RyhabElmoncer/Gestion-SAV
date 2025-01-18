package com.sav.gestion_sav.Model;

import jakarta.persistence.Entity;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Technicien extends User {

    private String specialite; // Par exemple, spécialité du technicien

}
