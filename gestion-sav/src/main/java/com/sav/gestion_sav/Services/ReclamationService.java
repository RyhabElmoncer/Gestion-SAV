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

    public ReclamationDTO ajouterReclamation(ReclamationDTO reclamationDTO) {
        Client client = clientRepository.findById(reclamationDTO.getClientId())
                .orElseThrow(() -> new RuntimeException("Client non trouvé"));
        Article article = articleRepository.findById(reclamationDTO.getArticleId())
                .orElseThrow(() -> new RuntimeException("Article non trouvé"));

        Reclamation reclamation = Reclamation.builder()
                .client(client)
                .article(article)
                .description(reclamationDTO.getDescription())
                .dateSoumission(LocalDate.now())
                .statut(StatutReclamation.valueOf(reclamationDTO.getStatut()))
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
                .clientId(reclamation.getClient().getId())
                .articleId(reclamation.getArticle().getId())
                .description(reclamation.getDescription())
                .dateSoumission(reclamation.getDateSoumission())
                .statut(reclamation.getStatut().name())
                .build();
    }
}