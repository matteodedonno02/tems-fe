import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core'
import { LocalStorageService } from '../services/local-storage.service';

export const adminLoggedGuard: CanActivateFn = (route, state) => {
  const localStorageService: LocalStorageService = inject(LocalStorageService)
  const router: Router = inject(Router)

  if(!localStorageService.getToken()) {
    router.navigate(['/login'])
  }

  return !!localStorageService.getToken();
};
