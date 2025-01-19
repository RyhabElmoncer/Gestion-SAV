import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/Auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup; // Formulaire de création de compte
  isSubmitting = false;  // Indique si une requête est en cours
  errorMessage: string | null = null;   

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      lastname: ['', Validators.required], 
      password: ['', [Validators.required, Validators.minLength(6)]],
      adresse: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.signupForm.invalid) return;

    this.isSubmitting = true;
    this.errorMessage = null;

    const formData = this.signupForm.value;

    this.authService.register(formData).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.router.navigate(['/login']); // Redirection vers la page de connexion
      },
      error: (err) => {
        this.isSubmitting = false;
        this.errorMessage = "Une erreur est survenue lors de l'inscription.";
        console.error(err);
      },
    });
  }
}
