package com.sav.gestion_sav.Controller;

import com.sav.gestion_sav.DTO.ReclamationDTO;
import com.sav.gestion_sav.Services.ReclamationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/auth/reclamations")
@RequiredArgsConstructor
public class ReclamationController {
    private final ReclamationService reclamationService;

    @PostMapping
    public ResponseEntity<ReclamationDTO> ajouterReclamation(@RequestBody ReclamationDTO reclamationDTO) {
        return ResponseEntity.ok(reclamationService.ajouterReclamation(reclamationDTO));
    }

    @GetMapping
    public ResponseEntity<List<ReclamationDTO>> obtenirToutesReclamations() {
        return ResponseEntity.ok(reclamationService.obtenirToutesReclamations());
    }
    @PutMapping("/reclamations/{id}/statut")
    public ResponseEntity<ReclamationDTO> changerStatut(
            @PathVariable Long id,
            @RequestParam String statut) {
        ReclamationDTO updatedReclamation = reclamationService.changerStatutReclamation(id, statut);
        return ResponseEntity.ok(updatedReclamation);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReclamationDTO> obtenirReclamationParId(@PathVariable Long id) {
        return ResponseEntity.ok(reclamationService.obtenirReclamationParId(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> supprimerReclamation(@PathVariable Long id) {
        reclamationService.supprimerReclamation(id);
        return ResponseEntity.noContent().build();
    }
}
