import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private baseUrl: string

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = `${environment.baseApi}/shop`
  }

  saveConfiguration(logoFile: File, shopName: string) {
    const fd:FormData = new FormData()
    fd.append('file', logoFile)
    fd.append('json', JSON.stringify({shopName}))
    return this.http.post(`${this.baseUrl}/auth/configure`, fd)
  }
}
