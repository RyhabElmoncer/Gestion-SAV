import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from '../../../models/Article';
import { ArticleService } from '../../../core/services/Article/article.service';

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrl: './ajouter-article.component.css'
})
export class AjouterArticleComponent {
  article: Article = {
    id:0,
    nom: '',
    marque: '',
    dateAchat: '',
    dureeGarantie: 0,
    description: '',
  };

  constructor(private articleService: ArticleService) {}

  onSubmit(form: any) {
    if (form.valid) {
      this.articleService.saveArticle(this.article).subscribe(
        (response) => {
          console.log('Article ajouté avec succès :', response);
          form.reset();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'article :', error);
        }
      );
    }
  }
}
