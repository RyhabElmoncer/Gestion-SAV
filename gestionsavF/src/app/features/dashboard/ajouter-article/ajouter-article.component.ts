import { Component } from '@angular/core';
import { Article } from '../../../models/Article';
import { ArticleService } from '../../../core/services/Article/article.service';
import { NgForm } from '@angular/forms'; // Import NgForm for type checking

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.css']
})
export class AjouterArticleComponent {
  article: Article = {
    id: 0,
    nom: '',
    marque: '',
    dateAchat: '', // Ensure this property is included
    dureeGarantie: 0,
    description: '',
    cin: '11111111' // Ensure this property is included
  };

  constructor(private articleService: ArticleService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.articleService.saveArticle(this.article).subscribe(
        (response) => {
          console.log('Article ajouté avec succès :', response);
          form.reset();
          this.article = {
            id: 0,
            nom: '',
            marque: '',
            dateAchat: '',
            dureeGarantie: 0,
            description: '',
            cin: ''
          };
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'article :', error);
          alert('Une erreur s\'est produite lors de l\'ajout de l\'article. Veuillez réessayer.');
        }
      );
    }
  }

  // Add this method to validate the date
  validateDate(form: NgForm) {
    if (this.isFutureDate(this.article.dateAchat)) {
      form.controls['dateAchat'].setErrors({ futureDate: true });
    } else {
      form.controls['dateAchat'].setErrors(null);
    }
  }

  // Helper method to check if the date is in the future
  isFutureDate(date: string): boolean {
    const selectedDate = new Date(date);
    const today = new Date();
    return selectedDate > today;
  }
}