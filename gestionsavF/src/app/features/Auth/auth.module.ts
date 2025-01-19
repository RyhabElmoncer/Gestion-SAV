// auth.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component'; // Composant Login
import { SignupComponent } from './signup/signup.component'; // Composant Signup
import { AuthRoutingModule } from './auth-routing.module'; // Module de routage pour Auth

@NgModule({
  declarations: [
    LoginComponent,  // Déclaration du composant Login
    SignupComponent, // Déclaration du composant Signup
  ],
  imports: [
    CommonModule,        // Fonctionnalités Angular de base
    FormsModule,         // Pour la directive [(ngModel)]
    ReactiveFormsModule, // Pour les formulaires réactifs
    RouterModule,        // Nécessaire pour le routage interne
    AuthRoutingModule,   // Routage spécifique au module Auth
  ],
})
export class AuthModule {}
