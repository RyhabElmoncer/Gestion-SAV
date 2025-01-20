package com.sav.gestion_sav.Services;

import com.sav.gestion_sav.DTO.ReclamationDTO;
import com.sav.gestion_sav.Enum.StatutReclamation;
import com.sav.gestion_sav.Model.*;
import com.sav.gestion_sav.Repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReclamationService {
    private final ReclamationRepository reclamationRepository;
    private final ClientRepository clientRepository;
    private final ArticleRepository articleRepository;

    // Ajout de la gestion de l'exception si le statut est invalide
    public ReclamationDTO ajouterReclamation(ReclamationDTO reclamationDTO) {
        StatutReclamation statut;
        try {
            // Vérification du statut de réclamation
            statut = StatutReclamation.valueOf(reclamationDTO.getStatut());
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Statut de réclamation invalide: " + reclamationDTO.getStatut());
        }

        Reclamation reclamation = Reclamation.builder()
                .description(reclamationDTO.getDescription())
                .dateSoumission(LocalDate.now())
                .statut(statut)
                .build();

        Reclamation savedReclamation = reclamationRepository.save(reclamation);
        return mapToDTO(savedReclamation);
    }

    public List<ReclamationDTO> obtenirToutesReclamations() {
        return reclamationRepository.findAll().stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    public ReclamationDTO obtenirReclamationParId(Long id) {
        Reclamation reclamation = reclamationRepository.findById(String.valueOf(id))
                .orElseThrow(() -> new RuntimeException("Réclamation non trouvée"));
        return mapToDTO(reclamation);
    }

    public void supprimerReclamation(Long id) {
        reclamationRepository.deleteById(String.valueOf(id));
    }

    private ReclamationDTO mapToDTO(Reclamation reclamation) {
        return ReclamationDTO.builder()
                .id(reclamation.getId())
                .description(reclamation.getDescription())
                .dateSoumission(reclamation.getDateSoumission())
                .statut(reclamation.getStatut().name())
                .build();
    }
    public ReclamationDTO changerStatutReclamation(Long id, String nouveauStatut) {
        // Recherche de la réclamation par ID
        Reclamation reclamation = reclamationRepository.findById(String.valueOf(id))
                .orElseThrow(() -> new RuntimeException("Réclamation non trouvée avec l'ID : " + id));

        try {
            // Vérification et mise à jour du statut
            StatutReclamation statut = StatutReclamation.valueOf(nouveauStatut);
            reclamation.setStatut(statut);

            // Sauvegarde de la réclamation mise à jour
            Reclamation updatedReclamation = reclamationRepository.save(reclamation);

            return mapToDTO(updatedReclamation);
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Statut de réclamation invalide : " + nouveauStatut);
        }
    }

}
