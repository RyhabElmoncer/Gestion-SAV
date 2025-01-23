package com.sav.gestion_sav.Controller;

import com.sav.gestion_sav.DTO.ReclamationDTO;
import com.sav.gestion_sav.Services.ReclamationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auth/reclamations")
@RequiredArgsConstructor
public class ReclamationController {

    private final ReclamationService reclamationService;

    @PostMapping
    public ReclamationDTO ajouterReclamation(@RequestBody ReclamationDTO reclamationDTO) {
        return reclamationService.ajouterReclamation(reclamationDTO);
    }
    @GetMapping("/cin/{cin}")
    public List<ReclamationDTO> obtenirReclamationsParCin(@PathVariable String cin) {
        return reclamationService.obtenirReclamationsParCin(cin);
    }
    @GetMapping
    public List<ReclamationDTO> obtenirToutesReclamations() {
        return reclamationService.obtenirToutesReclamations();
    }

    @GetMapping("/{id}")
    public ReclamationDTO obtenirReclamationParId(@PathVariable Long id) {
        return reclamationService.obtenirReclamationParId(id);
    }

    @DeleteMapping("/{id}")
    public void supprimerReclamation(@PathVariable Long id) {
        reclamationService.supprimerReclamation(id);
    }

    @PutMapping("/{id}/statut")
    public ReclamationDTO changerStatutReclamation(@PathVariable Long id, @RequestParam String statut) {
        return reclamationService.changerStatutReclamation(id, statut);
    }
}