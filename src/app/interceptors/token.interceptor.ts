import { HttpInterceptorFn } from '@angular/common/http';
import { LocalStorageService } from '../services/local-storage.service';
import { inject } from '@angular/core';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorageService: LocalStorageService = inject(LocalStorageService)
  const token = localStorageService.getToken()
  if(token) {
    const modifiedRequest = req.clone({
      setHeaders:{
        Authorization: `Bearer ${token}`
      }
    })

    return next(modifiedRequest)
  }

  
  return next(req)
}
