import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../core/services/Article/article.service';
import { Article } from '../../../models/Article';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrl: './liste-articles.component.css'
})
export class ListeArticlesComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.chargerArticles();
  }

  chargerArticles(): void {
    this.articleService.getAllArticles().subscribe(
      (data) => {
        this.articles = data;
      },
      (error) => {
        console.error("Erreur lors du chargement des articles :", error);
      }
    );
  }

  supprimerArticle(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      this.articleService.deleteArticle(id).subscribe(
        () => {
          this.articles = this.articles.filter(article => article.id !== id);
          console.log("Article supprimé avec succès !");
        },
        (error) => {
          console.error("Erreur lors de la suppression de l'article :", error);
        }
      );
    }
  }
}
