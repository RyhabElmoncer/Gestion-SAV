package com.sav.gestion_sav.Repository;

import com.sav.gestion_sav.Model.Article;
import com.sav.gestion_sav.Model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
