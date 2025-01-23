package com.sav.gestion_sav.Repository;

import com.sav.gestion_sav.Model.Reclamation;
import com.sav.gestion_sav.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReclamationRepository extends JpaRepository<Reclamation, String> {
    List<Reclamation> findByCin(String cin);

}
