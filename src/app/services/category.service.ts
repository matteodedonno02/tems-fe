import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Category} from "../classes/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl: string

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = `${environment.baseApi}/category`
  }

  findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/findAll`)
  }
}
