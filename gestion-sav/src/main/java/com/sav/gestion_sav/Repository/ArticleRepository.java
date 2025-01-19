package com.sav.gestion_sav.Repository;

import com.sav.gestion_sav.Model.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {
}
