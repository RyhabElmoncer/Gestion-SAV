import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from '../../../models/Article';
import { ArticleService } from '../../../core/services/Article/article.service';
import { ReclamationService } from '../../../core/services/Reclamation/reclamation.service';
import { Reclamation } from '../../../models/Reclamation'; // Importez le modèle Reclamation
import { StatutReclamation } from '../../../models/StatutReclamation'; // Importez l'énumération StatutReclamation

@Component({
  selector: 'app-ajouter-reclamation',
  templateUrl: './ajouter-reclamation.component.html',
  styleUrls: ['./ajouter-reclamation.component.css'],
})
export class AjouterReclamationComponent implements OnInit {
  reclamationForm!: FormGroup;
  articles: Article[] = [];
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private reclamationService: ReclamationService // Injectez le service ReclamationService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadArticles();
  }

  private initForm() {
    this.reclamationForm = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(10)]],
      articleId: ['', Validators.required],
      dateSoumission: ['', Validators.required],
    });
  }

  private loadArticles() {
    const cin = localStorage.getItem('cin'); // Récupérer le CIN depuis localStorage
    if (cin) {
      this.articleService.getArticlesByCin(cin).subscribe({
        next: (data) => (this.articles = data),
        error: (err) => console.error('Erreur lors du chargement des articles :', err),
      });
    } else {
      console.error('CIN non trouvé dans localStorage');
    }
  }

  onSubmit(): void {
    if (this.reclamationForm.valid) {
      this.isSubmitting = true;

      // Récupérer les valeurs du formulaire
      const { description, articleId, dateSoumission } = this.reclamationForm.value;

      // Créer une instance de Reclamation
      const reclamation = new Reclamation(
        description,
        dateSoumission,
        StatutReclamation.EN_COURS, // Statut par défaut
        articleId
      );

      // Envoyer la réclamation au backend
      this.reclamationService.ajouterReclamation(reclamation).subscribe({
        next: (response) => {
          console.log('Réclamation ajoutée avec succès :', response);
          this.isSubmitting = false;
          this.reclamationForm.reset(); // Réinitialiser le formulaire
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout de la réclamation :', err);
          this.isSubmitting = false;
        },
      });
    }
  }
}