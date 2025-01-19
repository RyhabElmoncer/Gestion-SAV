package com.sav.gestion_sav.Controller;

import com.sav.gestion_sav.DTO.ArticleDTO;
import com.sav.gestion_sav.Service.ArticleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auth/articles")
public class ArticleController {

    private final ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    // Get all articles
    @GetMapping
    public List<ArticleDTO> getAllArticles() {
        return articleService.getAllArticles();
    }

    // Get an article by id
    @GetMapping("/{id}")
    public ResponseEntity<ArticleDTO> getArticleById(@PathVariable Long id) {
        ArticleDTO articleDTO = articleService.getArticleById(id);
        if (articleDTO != null) {
            return ResponseEntity.ok(articleDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Create or update an article
    @PostMapping
    public ResponseEntity<ArticleDTO> saveArticle(@RequestBody ArticleDTO articleDTO) {
        ArticleDTO savedArticle = articleService.saveArticle(articleDTO);
        return new ResponseEntity<>(savedArticle, HttpStatus.CREATED);
    }

    // Delete an article by id
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteArticle(@PathVariable Long id) {
        articleService.deleteArticle(id);
        return ResponseEntity.noContent().build();
    }
}
