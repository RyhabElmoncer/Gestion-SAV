package com.sav.gestion_sav.auth;

import com.sav.gestion_sav.Enum.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

  private String username ;
  private String lastname;
  private String email;
  private String password;
  private String cin;
  private String specialite;
  private Role role;
  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }
}
