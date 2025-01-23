import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from '../../../models/Article';
import { ArticleService } from '../../../core/services/Article/article.service';
import { ReclamationService } from '../../../core/services/Reclamation/reclamation.service';
import { Reclamation } from '../../../models/Reclamation'; 
import { StatutReclamation } from '../../../models/StatutReclamation'; 

@Component({
  selector: 'app-ajouter-reclamation',
  templateUrl: './ajouter-reclamation.component.html',
  styleUrls: ['./ajouter-reclamation.component.css'],
})
export class AjouterReclamationComponent implements OnInit {
  reclamationForm!: FormGroup;
  articles: Article[] = [];
  isSubmitting = false;
  cin: string | null = null;  // Ajout d'une valeur par défaut

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private reclamationService: ReclamationService 
  ) {}

  ngOnInit(): void {
    this.cin = localStorage.getItem('cin'); 

    if (!this.cin) {
      console.error('CIN non trouvé dans localStorage');
      return;
    }

    this.initForm();
    this.loadArticles();
  }

  private initForm() {
    this.reclamationForm = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(10)]],
      articleId: [null, Validators.required],
      dateSoumission: [new Date().toISOString().substring(0, 10), Validators.required], 
    });
  }

  private loadArticles() {
    if (this.cin) {
      this.articleService.getArticlesByCin(this.cin).subscribe({
        next: (data) => (this.articles = data),
        error: (err) => console.error('Erreur lors du chargement des articles :', err),
      });
    }
  }

  onSubmit(): void {
    if (this.reclamationForm.invalid || !this.cin) {
      console.error('Formulaire invalide ou CIN manquant');
      return;
    }

    this.isSubmitting = true;

    // Création de l'objet Reclamation en tant qu'interface (si applicable)
    const reclamation: Reclamation = {
      description: this.reclamationForm.value.description,
      dateSoumission: this.reclamationForm.value.dateSoumission,
      statut: StatutReclamation.EN_COURS, 
      articleId: this.reclamationForm.value.articleId,
      cin: this.cin 
    };

    this.reclamationService.ajouterReclamation(reclamation).subscribe({
      next: (response) => {
        console.log('Réclamation ajoutée avec succès :', response);
        this.isSubmitting = false;
        this.reclamationForm.reset(); 
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout de la réclamation :', err);
        this.isSubmitting = false;
      },
    });
  }
}
