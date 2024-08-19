import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  baseUrl: string

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = `${environment.baseApi}/article`
  }

  getPaged(skip: number, limit: number, searchTerms?: string) {
    return this.http.get<Article[]>(`${this.baseUrl}/auth/paged/${skip}/${limit}`, searchTerms ? {
      params: {
        searchTerms
      }
    } : {})
  }
}
