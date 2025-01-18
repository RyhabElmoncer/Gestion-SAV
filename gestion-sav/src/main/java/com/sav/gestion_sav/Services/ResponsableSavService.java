package com.sav.gestion_sav.Services;

import com.sav.gestion_sav.DTO.ArticleDTO;
import com.sav.gestion_sav.DTO.InterventionDTO;
import com.sav.gestion_sav.DTO.ReclamationDTO;

import java.util.List;

public interface ResponsableSavService {

    ReclamationDTO traiterReclamation(Long reclamationId);
    void attribuerReclamationTechnicien(Long reclamationId, String technicienId);
    List<ReclamationDTO> listerReclamations();
    ReclamationDTO consulterReclamation(Long reclamationId);

    InterventionDTO planifierIntervention(InterventionDTO interventionDTO);
    InterventionDTO mettreAJourIntervention(Long interventionId, InterventionDTO interventionDTO);
    List<InterventionDTO> listerInterventions();
  //  FactureDTO facturerIntervention(Long interventionId);

    ArticleDTO ajouterArticle(ArticleDTO articleDTO);
    ArticleDTO modifierArticle(String articleId, ArticleDTO articleDTO);
    void supprimerArticle(String articleId);
   // PieceDTO ajouterPieceRechange(PieceDTO pieceDTO);
 //   PieceDTO modifierPieceRechange(String pieceId, PieceDTO pieceDTO);
    void supprimerPieceRechange(String pieceId);
    List<Object> listerArticlesEtPieces();
}
