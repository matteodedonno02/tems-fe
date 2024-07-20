import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.baseUrl = `${environment.baseApi}/users`
  }

  login(username: string, password: string) {
    return this.http.post(this.baseUrl, {
      username,
      password
    })
  }

  changePassword(newPassword: string) {
    return this.http.post(`${this.baseUrl}/auth/change-password`, { newPassword })
  }

  logout() {
    this.localStorageService.clearToken()
    this.router.navigate(['login'])
  }
}
