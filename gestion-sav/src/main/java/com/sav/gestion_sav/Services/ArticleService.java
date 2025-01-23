package com.sav.gestion_sav.Services;

import com.sav.gestion_sav.DTO.ArticleDTO;
import com.sav.gestion_sav.Mapper.ArticleMapper;
import com.sav.gestion_sav.Model.Article;
import com.sav.gestion_sav.Repository.ArticleRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ArticleService {

    private final ArticleRepository articleRepository;
    private final ArticleMapper articleMapper;

    public ArticleService(ArticleRepository articleRepository, ArticleMapper articleMapper) {
        this.articleRepository = articleRepository;
        this.articleMapper = articleMapper;
    }

    // Create or Update an article
    public ArticleDTO saveArticle(ArticleDTO articleDTO) {
        System.out.println("Received articleDTO: " + articleDTO);
        Article article = articleMapper.toEntity(articleDTO);
        Article savedArticle = articleRepository.save(article);
        return articleMapper.toDTO(savedArticle);
    }

    // Get an article by its id
    public ArticleDTO getArticleById(Long id) {
        Optional<Article> article = articleRepository.findById(id);
        return article.map(articleMapper::toDTO).orElse(null);
    }

    // Get all articles
    public List<ArticleDTO> getAllArticles() {
        List<Article> articles = articleRepository.findAll();
        return articles.stream().map(articleMapper::toDTO).toList();
    }
    public List<ArticleDTO> getArticlesByCin(String cin) {
        List<Article> articles = articleRepository.findByCin(cin);
        return articles.stream().map(articleMapper::toDTO).toList();
    }
    // Delete an article by id
    public void deleteArticle(Long id) {
        articleRepository.deleteById(id);
    }
}
