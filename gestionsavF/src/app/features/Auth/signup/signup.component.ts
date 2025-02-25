import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/Auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup; // Formulaire de création de compte
  isSubmitting = false;  // Indique si une requête est en cours
  errorMessage: string | null = null;   // Message d'erreur

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Initialisation du formulaire
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      lastname: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cin: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    // Vérifiez si le formulaire est valide
    if (this.signupForm.invalid) {
      console.warn('Formulaire invalide', this.signupForm.value); // Ajout d'un log pour le débogage
      return;
    }

    // Formulaire valide, passez à l'inscription
    console.log('Formulaire valide :', this.signupForm.value); // Affiche les valeurs pour vérification
    this.isSubmitting = true; // Activation du mode "soumission en cours"
    this.errorMessage = null;

    this.authService.register(this.signupForm.value).subscribe({
      next: () => {
        console.log('Inscription réussie');
        this.isSubmitting = false;
        this.router.navigate(['/login']); // Redirection après succès
      },
      error: (err) => {
        console.error('Erreur lors de l\'inscription :', err);
        this.isSubmitting = false;

        // Gérer les erreurs spécifiques envoyées par le backend
        if (err.error && err.error.message) {
          this.errorMessage = err.error.message; // Utiliser le message d'erreur envoyé par le backend
        } else {
          this.errorMessage = "Une erreur est survenue lors de l'inscription.";
        }
      },
    });
  }
}
