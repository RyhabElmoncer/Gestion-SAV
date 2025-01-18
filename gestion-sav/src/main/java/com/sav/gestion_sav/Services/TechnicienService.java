package com.sav.gestion_sav.Services;

import com.sav.gestion_sav.DTO.InterventionDTO;

import java.util.List;

public interface TechnicienService {

    InterventionDTO consulterIntervention(Long interventionId);
    List<InterventionDTO> listerInterventions(String technicienId);
    void mettreAJourInterventionStatut(Long interventionId, String statut);
}
