package com.sav.gestion_sav.Services.impl;

import com.sav.gestion_sav.DTO.ClientDTO;
import com.sav.gestion_sav.DTO.ReclamationDTO;
import com.sav.gestion_sav.Model.Client;
import com.sav.gestion_sav.Model.Reclamation;
import com.sav.gestion_sav.Services.ClientService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClientServiceImpl implements ClientService {



    @Override
    public ClientDTO modifierProfil(ClientDTO clientDTO) {
        // Modifier le profil d'un client
        Client client = findByEmail(clientDTO.getEmail());
        client.setUsername(clientDTO.getUsername());
        client.setLastName(clientDTO.getLastName());
        // Mettre à jour d'autres informations...
        return convertToDTO(client);
    }

    @Override
    public void supprimerCompte(String clientId) {
        // Supprimer le compte du client avec l'ID fourni
    }

    @Override
    public ReclamationDTO soumettreReclamation(ReclamationDTO reclamationDTO) {
        // Soumettre une réclamation
        Reclamation reclamation = new Reclamation();
        reclamation.setDescription(reclamationDTO.getDescription());
      //  reclamation.setClient(reclamationDTO.getClientId());
        // Créer et sauvegarder la réclamation
        return convertToReclamationDTO(reclamation);
    }

    @Override
    public ReclamationDTO consulterReclamation(Long reclamationId) {
        // Consulter une réclamation par son ID
        Reclamation reclamation = findReclamationById(reclamationId);
        return convertToReclamationDTO(reclamation);
    }

    @Override
    public List<ReclamationDTO> listerReclamations(Long clientId) {
        // Lister toutes les réclamations d'un client
        List<Reclamation> reclamations = findReclamationsByClientId(clientId);
        return convertToReclamationDTOList(reclamations);
    }

    @Override
    public ReclamationDTO modifierReclamation(Long reclamationId, ReclamationDTO reclamationDTO) {
        // Modifier une réclamation existante
        Reclamation reclamation = findReclamationById(reclamationId);
        reclamation.setDescription(reclamationDTO.getDescription());
        reclamation.setStatut(reclamationDTO.getStatut());
        return convertToReclamationDTO(reclamation);
    }

    @Override
    public void supprimerReclamation(Long reclamationId) {
        // Supprimer la réclamation
    }

    @Override
    public String suivreReclamation(Long reclamationId) {
        // Suivre l'état de la réclamation
        return "État actuel de la réclamation";
    }

    // Helper methods to convert entities to DTOs and vice versa
    private ClientDTO convertToDTO(Client client) {
        ClientDTO dto = new ClientDTO();
        dto.setId(client.getId());
        dto.setUsername(client.getUsername());
        dto.setEmail(client.getEmail());
        dto.setLastName(client.getLastName());
        dto.setRole(client.getRole());
        return dto;
    }

    private ReclamationDTO convertToReclamationDTO(Reclamation reclamation) {
        ReclamationDTO dto = new ReclamationDTO();
        dto.setId(reclamation.getId());
        dto.setDescription(reclamation.getDescription());
        dto.setStatut(reclamation.getStatut());
    //    dto.setClientId(reclamation.getClientId());
        return dto;
    }

    private List<ReclamationDTO> convertToReclamationDTOList(List<Reclamation> reclamations) {
        return reclamations.stream()
                .map(this::convertToReclamationDTO)
                .collect(Collectors.toList());
    }

    // Les méthodes de recherche peuvent être des appels à la base de données
    private Client findByEmail(String email) {
        // Rechercher un client par son email
        return new Client();
    }

    private Reclamation findReclamationById(Long id) {
        // Trouver une réclamation par ID
        return new Reclamation();
    }

    private List<Reclamation> findReclamationsByClientId(Long clientId) {
        // Rechercher toutes les réclamations du client
        return List.of(new Reclamation());
    }
}
