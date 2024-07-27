import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Category} from '../models/category';
import {environment} from '../../environments/environment';

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

  getPaged(skip: number, limit: number, searchTerms?: string) {
    return this.http.get<Category[]>(`${this.baseUrl}/auth/paged/${skip}/${limit}`, searchTerms ? {
      params: {
        searchTerms
      }
    } : {})
  }

  deleteCategory(idCategory: number) {
    return this.http.delete(`${this.baseUrl}/auth/delete`, {
      body: {
        idCategory
      }
    })
  }

  saveOrUpdate(categoryImage: File, category: Category) {
    const fd: FormData = new FormData()
    fd.append('file', categoryImage ?? null)
    fd.append('json', JSON.stringify({category}))
    return this.http.post<Promise<Category>>(`${this.baseUrl}/auth/saveOrUpdate`, fd)
  }
}
