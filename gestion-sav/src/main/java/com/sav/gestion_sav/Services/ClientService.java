package com.sav.gestion_sav.Services;

import com.sav.gestion_sav.DTO.ClientDTO;
import com.sav.gestion_sav.DTO.ReclamationDTO;

import java.util.List;

public interface ClientService {

    //  Gestion du compte
    ClientDTO modifierProfil(ClientDTO clientDTO);
    void supprimerCompte(String clientId);

    // Gestion des réclamations
    ReclamationDTO soumettreReclamation(ReclamationDTO reclamationDTO);
    ReclamationDTO consulterReclamation(Long reclamationId);
    List<ReclamationDTO> listerReclamations(Long clientId);
    ReclamationDTO modifierReclamation(Long reclamationId, ReclamationDTO reclamationDTO);
    void supprimerReclamation(Long reclamationId);
    String suivreReclamation(Long reclamationId);  // Retourne l'état
}
