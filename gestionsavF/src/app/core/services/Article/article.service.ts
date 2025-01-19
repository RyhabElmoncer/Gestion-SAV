// src/app/services/article.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../../../models/Article';
import { environment } from '../../../../../environments/environment'; // Importer l'environnement

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private apiUrl: string = `${environment.apiUrl}/articles`;  // L'URL de votre API

  constructor(private http: HttpClient) {}

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  // Get an article by ID
  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }

  // Create or update an article
  saveArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.apiUrl, article);
  }

  // Delete an article by ID
  deleteArticle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
