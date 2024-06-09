import { Injectable } from '@angular/core';
import * as crypto from 'crypto-js'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private readonly TOKEN_KEY = 'token'

  private privateKey: string

  constructor() {
    this.privateKey = environment.localStorageKey
  }

  setToken(value: string) {
    localStorage.setItem(this.TOKEN_KEY, this.encrypt(value))
  }

  getToken() {
    const encrypted = localStorage.getItem(this.TOKEN_KEY)
    return encrypted ? this.decrypt(encrypted) : null
  }

  clearToken() {
    localStorage.removeItem(this.TOKEN_KEY)
  }

  private encrypt(data: string) {
    return crypto.AES.encrypt(data, this.privateKey).toString()
  }

  private decrypt(data: string) {
    return crypto.AES.decrypt(data, this.privateKey).toString(crypto.enc.Utf8)
  }
}
