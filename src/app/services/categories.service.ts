import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseUrl: string

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = `${environment.baseApi}/category`
  }

  getPaged(skip: number = 0, limit: number = 10) {
    return this.http.get<Category[]>(`${this.baseUrl}/auth/paged/${skip}/${limit}`)
  }
}
