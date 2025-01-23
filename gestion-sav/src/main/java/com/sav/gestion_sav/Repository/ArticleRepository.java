package com.sav.gestion_sav.Repository;

import com.sav.gestion_sav.Model.Article;
import com.sav.gestion_sav.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {
    List<Article> findByCin(String cin);

}
