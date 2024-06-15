import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string

  constructor(
    private http: HttpClient
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
}
